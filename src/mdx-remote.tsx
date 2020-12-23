import React from 'react'
import mdxReact, { ComponentDictionary } from '@mdx-js/react'

const mdx = mdxReact.mdx
const MDXProvider = mdxReact.MDXProvider

type MdxRemoteProps = {
  source: string
  components?: ComponentDictionary
  scope?: any
}

function MdxRemote(props: MdxRemoteProps) {
  const source = props.source + 'return MDXContent;'
  const scope = props.scope || {}
  const args = ['mdx'].concat(Object.keys(scope), source)
  const getContent = Function.apply(null, args)
  const MDXContent = getContent.apply(null, [mdx].concat(Object.values(scope)))

  return (
    <MDXProvider components={props.components}>
      <MDXContent {...props} />
    </MDXProvider>
  )
}

export default React.memo(MdxRemote)

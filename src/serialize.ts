import mdx from '@mdx-js/mdx'
import { transformAsync } from '@babel/core'

import * as presetReact from '@babel/preset-react'
import presetMinify from 'babel-preset-minify'
import pluginBrowser from './babel-plugin-mdx-browser'

export type SerializeOptions = {
  mdxOptions?: Omit<mdx.Options, 'skipExport'>
}

export default async function serialize(
  source: string,
  { mdxOptions }: SerializeOptions
): Promise<string> {
  // Transform MDX string into React
  const code = await mdx(source, {
    ...(mdxOptions || {}),
    skipExport: true,
  })

  // Transform ES6 code into browser compatible code with Babel
  const file = await transformAsync(code, {
    presets: [[presetReact, { useBuiltIns: true }], presetMinify],
    plugins: [pluginBrowser],
    configFile: false,
  })

  // Stripe out any first line comments
  return file.code?.replace(/^\/\*.*\*\//, '')
}

import typescript from '@rollup/plugin-typescript'

export default [
  {
    input: 'src/serialize.ts',
    output: {
      file: 'serialize.js',
      format: 'cjs',
    },
    plugins: [typescript()],
  },
  {
    input: 'src/mdx-remote.tsx',
    output: {
      file: 'mdx-remote.js',
      format: 'cjs',
    },
    plugins: [typescript()],
  },
]

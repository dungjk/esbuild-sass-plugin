const esbuild = require('esbuild')
const {sassPlugin, postcssModules} = require('../../../lib')
const {cleanFixture, logSuccess, logFailure} = require('../utils')

cleanFixture(__dirname)

esbuild.build({
  entryPoints: ['./src/index.js'],
  outdir: './out',
  bundle: true,
  format: 'esm',
  plugins: [
    sassPlugin({
      namedExports(name) {
        return `${name.replace(/-/g, '_')}`;
      },
      transform: postcssModules({
        generateScopedName: '[hash:base64:8]--[local]',
        localsConvention: 'camelCaseOnly'
      })
    })
  ]
}).then(logSuccess, logFailure)
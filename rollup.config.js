import {terser} from 'rollup-plugin-terser';

module.exports = {
  input: 'index.js',
  output:[ {
    file: 'dist/docsify-wiki.js',
    format: 'cjs'
  },
  {
    file: 'dist/docsify-wiki.min.js',
    format: 'iife',
    name: 'version',
    plugins: [terser()]
  }
],
};
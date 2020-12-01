import {terser} from 'rollup-plugin-terser';

module.exports = {
  input: 'index.js',
  output:[ {
    file: 'dist/docsify-wikilink.js',
    format: 'cjs'
  },
  {
    file: 'dist/docsify-wikilink.min.js',
    format: 'iife',
    name: 'version',
    plugins: [terser()]
  }
],
};
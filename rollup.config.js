import {terser} from 'rollup-plugin-terser';

module.exports = {
  input: 'index.js',
  output:[ {
    file: 'dist/wiki.js',
    format: 'cjs'
  },
  {
    file: 'dist/wiki.min.js',
    format: 'iife',
    name: 'version',
    plugins: [terser()]
  }
],
};
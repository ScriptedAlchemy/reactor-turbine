import resolve from 'rollup-plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/engine.js',
    format: 'iife',
  },
  globals: {
    'querystring': 'React',
  },
  name: '_satellite',
  plugins: [
    resolve({
      browser: true
    }),
    builtins(),
    commonjs()
  ]
};

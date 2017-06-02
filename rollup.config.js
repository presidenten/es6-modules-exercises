const buble = require('rollup-plugin-buble');

module.exports = {
  exports: 'named',
  entry: 'src/index.js',
  dest: 'dist/index.js',
  format: 'cjs',
  plugins: [buble()],
};

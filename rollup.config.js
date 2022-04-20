import alias from './plugin/rollup-plugin-alias';
import image from './plugin/rollup-plugin-image';
import replace from './plugin/rollup-plugin-replace';
import html from './plugin/rollup-plugin-html/index';
module.exports = {
  input: 'src/index.js',
  output: {
    dir: 'dists',
    format: 'cjs',
  },
  plugins: [
    alias({
      entries: [
        // 将把 import xxx from 'module-a'
        // 转换为 import xxx from './module-a'
        { find: 'a', replacement: './module/a.js' },
        { find: 'b', replacement: './module/b.js' },
      ],
    }),
    image(),
    replace({
      'process.env.NODE_ENV': 'development',
      'process.env.ENV': 'env',
    }),
    html(),
  ],
};

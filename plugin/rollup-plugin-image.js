import { createFilter } from '@rollup/pluginutils';
import { extname } from 'path';
import { readFileSync } from 'fs';
const mimeTypes = {
  '.png': 'image/png',
  // 后面图片类型省略
};

const getDataUri = ({ format, mime, source }) =>
  `data:${mime};${format},${source}`;

const constTemplate = ({ dataUri }) => `
  var img = "${dataUri}";
  export default img;
`;

const filter = createFilter(/\.png$/);
const images = (options) => {
  return {
    name: 'images',
    // load 返回的内容必须是 esm
    async load(id) {
      if (!filter(id)) return;
      const mime = mimeTypes[extname(id)];
      const format = 'base64';
      const source = readFileSync(id, format).replace(/[\r\n]+/gm, '');
      const dataUri = getDataUri({ format, mime, source });
      return constTemplate({ dataUri }).trim();
    },
  };
};

export default images;

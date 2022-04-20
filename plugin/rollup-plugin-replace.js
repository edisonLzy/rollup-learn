import { flow } from 'lodash';
function replace(replaces) {
  const remaping_fns = Object.entries(replaces).reduce((acc, [k, v]) => {
    const fn = (code) => {
      return code.replace(k, `'${v}'`);
    };
    acc.push(fn);
    return acc;
  }, []);
  const exec_replace = flow(remaping_fns);
  return {
    name: 'replace',
    transform(code, id) {
      return exec_replace(code);
    },
    // code chunk的代码
    // chunk chunk的元信息
    renderChunk(code, chunk) {
      console.log(chunk);
      return exec_replace(code);
    },
  };
}
export default replace;

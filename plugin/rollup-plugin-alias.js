const alias = (options) => {
  const entries = options.entries;
  return {
    name: 'alias',
    // importee 导入的模块名称
    // importer 导入importee的文件
    resolveId(importee, importer, resolveOptions) {
      const { isEntry } = resolveOptions;
      if (isEntry) return;
      const matched = entries.find((it) => it.find === importee);
      if (!matched) {
        return;
      }
      const updatedId = importee.replace(matched.find, matched.replacement);
      return this.resolve(
        updatedId,
        importer,
        Object.assign({ skipSelf: true }, resolveOptions)
      ).then((resolved) => {
        return resolved || { id: updatedId };
      });
    },
  };
};

export default alias;

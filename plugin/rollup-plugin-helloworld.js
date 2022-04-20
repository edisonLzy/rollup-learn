const helloPlugin = (options) => {
  return {
    name: 'hello-world',
    transform(code, id) {
      console.log(id);
      return {
        code,
        id,
      };
    },
  };
};

export default helloPlugin;

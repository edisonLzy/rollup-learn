export default function html() {
  return {
    name: 'html',
    async generateBundle(output, bundle) {
      console.log(bundle);
    },
  };
}

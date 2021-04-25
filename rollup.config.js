import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import serve from 'rollup-plugin-serve';
import postcss from 'rollup-plugin-postcss';
import alias from '@rollup/plugin-alias';

const defaultConfig = {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.cjs.js',
    format: 'esm',
    name: 'globalName',
    globals:{
      lodash:'_',
    }
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    typescript(),
    alias({
      entries:[{
        
      }]
    })
  ],
  external:['lodash']
};

function resolveArgv(){
  return {
    isProd:process.env.TARGET === 'producation',
    isServe:process.env.TARGET === 'serve'
  }
}

function createProdConfig(){
    const {plugins}  = defaultConfig;
    // add terser 
    const _plugins = [...plugins,terser()]
    return {
      ...defaultConfig,
      plugins:_plugins
    }
}

function createAppConfig(){
  const {plugins}  = defaultConfig;
  // add serve 
  const _plugins = [...plugins, postcss(),serve({
    open:true,
    port:8080,
    contentBase:['dist','public']
  })]
  return {
    ...defaultConfig,
    plugins:_plugins
  }
}

function createConfig () {
  // 解析 args
  const {isProd,isServe} = resolveArgv()
  return isProd ? createProdConfig():isServe ? createAppConfig():defaultConfig;
}
export default createConfig()

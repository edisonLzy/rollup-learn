import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel'
import {terser} from 'rollup-plugin-terser';
export default {
    input:'./index.js',
    output:[
        {
        file: './dist/bundle.js',
        sourcemap:true,
        format:'umd',
        name:'Test',
       },
       {
        file: './dist/bundle.min.js',
        format: 'es',
        sourcemap:true,
        plugins: [terser()]
      }
],
    plugins:[commonjs(),babel(),resolve(),json()], 
    external:['lodash']
}
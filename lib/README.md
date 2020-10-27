# rollup-learn

> Rollup 是一个 JavaScript 模块打包器 , 默认`支持ES6 Module` 支持`tree-shaking`

## 安装

```js
npm install -g rollup 
```

## Command Line Interface

1. rollup --help / -h : 查看帮助命令

2. rollup -f : 按照指定的规范输出目标文件

```js
// 输出目标为  commonjs
rollup -f cjs
```

3. rollup -o / --file: 指定输出的文件名

4. rollup -c : 指定打包的配置文件

## 配置文件

> 默认使用 根目录下的 `rollup.config.js` 作为`默认的配置文件`

**input**

**output**
> {} | []

```js

{
        file: './dist/bundle.js',
        sourcemap:true,
        format:'umd',
        name:'暴露的全局变量' // 未生效
}

```
**plugins**
> [plugin]

```js
import json from '@rollup/plugin-json'
export default {
    //....
    plugins:[json()]
}

```

**external**
> string[] | (id:string)=>boolean

**onwarn**

## 插件


# get

1. commmonJs 默认可以加载 `json文件`, es module 默认不支持
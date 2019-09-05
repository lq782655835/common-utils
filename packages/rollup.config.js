// 读取package.json
import pkg from './package.json';

// 用来解析依赖的模块路径。rollup-plugin-commonjs 通常与 rollup-plugin-node-resolve 一同使用
import resolve from 'rollup-plugin-node-resolve';
// rollup打包机制基于ES6模块，将 commonjs 模块转成 es6 模块
import commonjs from 'rollup-plugin-commonjs';
// 支持ES6语法转ES5
import babel from 'rollup-plugin-babel';
// 压缩混淆代码
// import { uglify } from 'rollup-plugin-uglify';

// 代码头
const banner =
    `/*!
 * common-utils.js v${pkg.version}
 * (c) 2019-${new Date().getFullYear()} Russell
 * https://github.com/lq782655835/common-utils
 * Released under the MIT License.
 */`


export default {
    input: './src/index.js',
    output: [{
            format: 'cjs',
            // 生成的文件名和路径
            // package.json的main字段, 也就是模块的入口文件
            file: pkg.main, 
            banner,
            sourcemap: true
        },
        {
            format: 'es',
            // rollup和webpack识别的入口文件, 如果没有该字段, 那么会去读取main字段
            file: pkg.module,
            banner,
            sourcemap: true
        },
        {
            format: 'umd',
            name: 'commonUtils',
            file: pkg.browser,
            banner,
            sourcemap: true
        }
    ],
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**' // 只编译我们的源代码
        }),
    ]
};
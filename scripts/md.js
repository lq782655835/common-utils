const fs = require('fs');
const chalk = require('chalk');
const commonUtils = require('../packages/dist/common-utils.common.js')
const badges = [
    // `![](https://img.shields.io/badge/已收录-${json.length}条-673ab7.svg)`,

    `[![](https://badgen.net/vs-marketplace/v/springleo.common-utils)](https://marketplace.visualstudio.com/items?itemName=springleo.common-utils)`,

    `[![](https://badgen.net/vs-marketplace/i/springleo.common-utils)](https://marketplace.visualstudio.com/items?itemName=springleo.common-utils)`,

    // `[![](https://badgen.net/vs-marketplace/d/springleo.common-utils)](https://marketplace.visualstudio.com/items?itemName=springleo.common-utils)`,

    `![](https://img.shields.io/badge/license-MIT-F44336.svg)`,
];

let content = `# common-utils ${badges.join(' ')}
常用工具函数，支持vscode扩展插件

## :rocket:图形界面

https://lq782655835.github.io/common-utils/example/

## npm插件

First install the package via npm:

    npm install ai-common-utils

To use the package in your module:

    import { bytesToSize } from 'ai-common-utils'

## vscode插件
1. 安装vscode中插件搜索框输入**common-utils**
2. 安装完毕后按**F1**(或者ctrl+shift+p).
3. 输入"**zz**"可以看到工具列表.
4. 或者**输入关键词**, 比如"bytesToSize".

## 工具函数
`
Object.keys(commonUtils).forEach(fnName => {
    // 过滤类，类名首字母大写
    if (!/[A-Z]/.test(fnName.charAt(0))) {
        content += `\r\n### ${fnName}\r\n`;
        content+= `\`\`\`javascript\r\n`;
        content+= `${commonUtils[fnName]}\r\n\`\`\`\r\n`;
    }
})

fs.writeFileSync('./README.md',content,'utf-8');
console.log(chalk.green('生成完毕'));
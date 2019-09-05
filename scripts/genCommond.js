const commonUtils = require('../packages/dist/common-utils.common.js')
const pkg = require('../package.json');
const fs = require('fs');
const tools = [{name: 'json2ts', key: 'ctrl+alt+V'}]

pkg.activationEvents = [];
pkg.contributes.commands = [];
pkg.contributes.keybindings = [];

Object.keys(commonUtils).forEach(fnName => {
    let command =  `extension.${fnName}`
    pkg.activationEvents.push(`onCommand:${command}`);
    pkg.contributes.commands.push({
        command,
        title: `zz: ${fnName}`
    });
})
tools.forEach(({name, key}) => {
    let command = `tools.${name}`
    pkg.activationEvents.push(`onCommand:${command}`);
    pkg.contributes.commands.push({
        command,
        title: `zzt: ${name}`
    });
    if (key) {
        pkg.contributes.keybindings.push({
            command,
            key
        });
    }
})
fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 4), 'utf8');
console.log('完成!');
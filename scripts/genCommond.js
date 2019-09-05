const commonUtils = require('../packages/dist/common-utils.common.js')
const pkg = require('../package.json');
const fs = require('fs');

pkg.contributes.commands = [];
pkg.activationEvents = [];
Object.keys(commonUtils).forEach(fnName => {
    pkg.contributes.commands.push({
        command: 'extension.' + fnName,
        title: `zz: ${fnName}`
    });

    pkg.activationEvents.push('onCommand:extension.'+fnName);
})
fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 4), 'utf8');
console.log('完成!');
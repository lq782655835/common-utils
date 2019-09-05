var ghpages = require('gh-pages');
const shell = require('shelljs');
const chalk = require('chalk');

shell.rm('-rf', './demo');
shell.mkdir('-p','./demo/dist');
shell.mkdir('-p','./demo/example');
shell.cp('-Rf', './example/*', './demo/example');
shell.cp('-Rf', './dist/*', './demo/dist');


// 发布
ghpages.publish('./demo', {
    branch: 'gh-pages',
}, (err) => {
    if(err) {
        console.log(chalk.red(err));
    } else {
        shell.rm('-rf', './demo');
        console.log(chalk.green('demo同步完成!'));
    }
});
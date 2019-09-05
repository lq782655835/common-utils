// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const commonUtils = require('./packages/dist/common-utils.common.js')
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "common-utils" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let fnDisposableds = Object.keys(commonUtils).map(fnName => {
		return vscode.commands.registerCommand(`extension.${fnName}`, function() {
			const fnString = commonUtils[fnName].toString()
			const editor = vscode.window.activeTextEditor;
			if (editor) {
				const { selections } = editor;

				editor.edit(editBuilder => {
					selections.forEach(selection => {
						const { start, end } = selection;
						const range = new vscode.Range(start, end);
						editBuilder.replace(range, fnString);
					});
				});
				// Display a message box to the user
				vscode.window.showInformationMessage(`已插入函数: ${fnName}`);
			} else {
				vscode.window.showWarningMessage('common-utils: 只有在编辑文本的时候才可以使用!');
			}
		})
	})
	context.subscriptions.concat(fnDisposableds)
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
	vscode.window.showWarningMessage('common-utils: 已关闭!');
}

module.exports = {
	activate,
	deactivate
}

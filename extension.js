const vscode = require('vscode');
const commonUtils = require('./packages/dist/common-utils.common.js')
const copyPaste = require('copy-paste')
const json2ts = require("json2ts");
const json2tsNEI = require('json2ts-core/src/json2ts')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, your extension "common-utils" is now active!');

	// function command
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

	// ts convert tool
	let clipboardJson2ts = vscode.commands.registerCommand("tools.json2ts", () => {
        copyPaste.paste((error, content) => {
            if (json2ts.isJson(content)) {
				// json处理
				vscode.window.setStatusBarMessage("json转换为ts类型中");
				let result = json2ts.convert(content);
				convertSuccessCallback(result)
            } else {
				if (/^(https?:)/.test(content)) {
					// url网址处理
					let workspacePath = vscode.workspace.rootPath
					if (!workspacePath) {
						return vscode.window.showErrorMessage("请在工作空间内执行命令");
					}
					let target = require('path').join(workspacePath, './TEMP_INTERFACES')
					json2tsNEI({ url: content, target }) // 生成文件
					vscode.window.showInformationMessage(`已生成接口文件，生成路径：${target}`);
				} else {
					vscode.window.showErrorMessage("请拷贝JSON对象或URL网址");
				}
			}
			function convertSuccessCallback(result) {
				vscode.window.activeTextEditor.edit((editBuilder) => {
					let startLine = vscode.window.activeTextEditor.selection.start.line;
					let lastCharIndex = vscode.window.activeTextEditor.document.lineAt(startLine).text.length;
					let position = new vscode.Position(startLine, lastCharIndex);
					editBuilder.insert(position, result);

					vscode.window.setStatusBarMessage("Enjoy! :)");
				});
			}
        });
	});
	context.subscriptions.push(clipboardJson2ts);
}
exports.activate = activate;

function deactivate() {
	vscode.window.showWarningMessage('common-utils: 已关闭!');
}

module.exports = {
	activate,
	deactivate
}

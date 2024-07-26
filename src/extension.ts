import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "date-block-comment" is now active!');

    const config = vscode.workspace.getConfiguration('dateBlockComment');
    const userName = config.get('userName', '');
    const startMarker = config.get('startMarker', 'START');
    const endMarker = config.get('endMarker', 'END');

    // 사용자 설정이 없으면 기본 값으로 설정 업데이트
    if (userName === '') {
        config.update('userName', '', vscode.ConfigurationTarget.Global);
    }
    if (startMarker === 'START') {
        config.update('startMarker', 'START', vscode.ConfigurationTarget.Global);
    }
    if (endMarker === 'END') {
        config.update('endMarker', 'END', vscode.ConfigurationTarget.Global);
    }

    let disposable = vscode.commands.registerCommand('extension.addDateBlockComment', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        const config = vscode.workspace.getConfiguration('dateBlockComment');
        const userName = config.get('userName', ''); 
        
        // 날짜 형식을 yy-mm-dd로 변경
        const dateObj = new Date();
        const year = String(dateObj.getFullYear()).slice(2); // 연도의 마지막 두 자리
        const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
        const day = String(dateObj.getDate()).padStart(2, '0');
        const date = `${year}-${month}-${day}`; // yy-mm-dd 형식

        const startMarker = config.get('startMarker', 'START');
        const endMarker = config.get('endMarker', 'END');

        let startComment: string;
        let endComment: string;

        if (userName) {
            startComment = `// ${date} [${userName}] ${startMarker}\n`;
            endComment = `// ${date} [${userName}] ${endMarker}`;
        } else {
            startComment = `// ${date} ${startMarker}\n`;
            endComment = `// ${date} ${endMarker}`;
        }

        const { selection } = editor;
        const selectedText = editor.document.getText(selection);

        // 선택된 텍스트에 시작 주석 추가
        const newText = startComment + selectedText;

        editor.edit((editBuilder: vscode.TextEditorEdit) => {
            // 선택된 텍스트를 시작 주석과 함께 교체
            editBuilder.replace(selection, newText);
        }).then(() => {
            // 선택된 텍스트의 마지막 줄 다음에 끝 주석 추가
            const lastLine = selection.end.line + 1;
            const lastLineText = editor.document.lineAt(lastLine).text;
            const endPosition = new vscode.Position(lastLine, lastLineText.length > 0 ? lastLineText.length : 0);
            editor.edit((editBuilder: vscode.TextEditorEdit) => {
                editBuilder.insert(endPosition, '\n' + endComment);
            });
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}

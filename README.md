# 날짜 블록 주석

선택한 텍스트를 현재 날짜와 사용자 정의 시작 및 종료 마커를 포함한 주석 블록으로 감쌉니다.

## 특징

- 선택한 텍스트 주위에 날짜가 포함된 주석 블록을 추가합니다.
- 시작 및 종료 마커를 사용자 정의할 수 있습니다.
- 선택적으로 주석 블록에 사용자 이름을 포함할 수 있습니다.

## 설치

1. [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/)에서 확장 프로그램을 설치합니다.
2. VS Code 편집기를 열고 창의 측면에 있는 작업 표시줄에서 확장 아이콘을 클릭하여 확장 보기로 이동합니다.
3. `Date Block Comment`를 검색하고 `설치`를 클릭합니다.

## 사용법

1. 날짜가 포함된 주석 블록으로 감싸고 싶은 텍스트를 선택합니다.
2. `Ctrl+Alt+N` (또는 사용자 정의 키 바인딩)을 눌러 주석 블록을 추가합니다.

선택한 텍스트는 다음과 같이 주석 블록으로 감싸집니다:

```
// yyyy-mm-dd START
selected text
// yyyy-mm-dd END
```

## 설정

`settings.json` 파일에서 확장 프로그램의 설정을 사용자 정의할 수 있습니다.

### 설정 예제

```json
{
    "dateBlockComment.userName": "Your Name",
    "dateBlockComment.startMarker": "START",
    "dateBlockComment.endMarker": "END"
}
```

### 사용 가능한 설정

- `dateBlockComment.userName`: 주석 블록에 포함할 사용자 이름입니다. 비워 두면 사용자 이름이 포함되지 않습니다.
- `dateBlockComment.startMarker`: 주석 블록의 시작 마커입니다. 기본값은 "START"입니다.
- `dateBlockComment.endMarker`: 주석 블록의 종료 마커입니다. 기본값은 "END"입니다.

## 사용자 정의 키 바인딩

`keybindings.json` 파일에서 날짜 블록 주석을 추가하는 키 바인딩을 사용자 정의할 수 있습니다.

### 사용자 정의 키 바인딩 예제

```json
[
    {
        "key": "ctrl+shift+d",
        "command": "extension.addDateBlockComment",
        "when": "editorTextFocus"
    }
]
```

## 라이선스

MIT 라이선스

```
MIT License

Copyright (c) 2024 KJW

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 리포지토리

[GitHub Repository](https://github.com/compaq01101/date-block-comment)


# Date Block Comment

Wraps selected text with a comment block that includes the current date and optionally user-defined start and end markers.

## Features

- Add a date-stamped comment block around selected text.
- Customize the start and end markers.
- Optionally include your username in the comment block.

## Installation

1. Install the extension from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/).
2. Open your VS Code editor and go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window.
3. Search for `Date Block Comment` and click `Install`.

## Usage

1. Select the text you want to wrap with a date-stamped comment block.
2. Press `Ctrl+Alt+N` (or your custom key binding) to add the comment block.

The selected text will be wrapped with a comment block that looks like this:

```
// yyyy-mm-dd START
selected text
// yyyy-mm-dd END
```

## Configuration

You can customize the extension's settings in your `settings.json` file.

### Example Settings

```json
{
    "dateBlockComment.userName": "Your Name",
    "dateBlockComment.startMarker": "START",
    "dateBlockComment.endMarker": "END"
}
```

### Available Settings

- `dateBlockComment.userName`: The user name to include in the comment block. Leave empty for no user name.
- `dateBlockComment.startMarker`: The start marker for the comment block. Default is "START".
- `dateBlockComment.endMarker`: The end marker for the comment block. Default is "END".

## Custom Key Binding

You can customize the key binding for adding the date block comment in your `keybindings.json` file.

### Example Custom Key Binding

```json
[
    {
        "key": "ctrl+shift+d",
        "command": "extension.addDateBlockComment",
        "when": "editorTextFocus"
    }
]
```

## License

MIT License

```
MIT License

Copyright (c) 2024 KJW

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Repository

[GitHub Repository](https://github.com/compaq01101/date-block-comment)

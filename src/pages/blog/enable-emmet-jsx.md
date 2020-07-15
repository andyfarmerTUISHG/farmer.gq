---
path: "/blog/enable-jsx-vscode"
title: "HOw to Enable Emmet in VS Code"
date: "2020-07-01"
---

TO be able to enable Emmett within Javascript / React

1. Open any source folder on VS Code, and go to Settings : On Mac : Command + ,
1. Go to the Workspace Settings tab.
1. Search for Emmet
1. Click “Edit in settings.json”
1. Add the following to the settings.json file that opened up.

```JSON
{
   "emmet.includeLanguages": {
      "javascript": "javascriptreact"
   }
}
```

# Modex

## Description

Modex is an unpublished VSCode extension that partially implements some of my favourite navigation keybindings. 

Modex uses capslock to toggle between two familiar modes: normal and insert. Insert mode leaves default keybindings unchanged. Normal mode maps navigation keys to the right hand of the home row, and maps some editing shortcuts to the left hand of the home row. The active mode is displayed on the status bar and indicated using an alteration to the caret.

Normal mode keybindings are as follows:

| Key      | Action       |
|----------|--------------|
| Capslock | Switch mode  |
| i        | Up           |
| j        | Left         |
| k        | Down         |
| l        | Right        |
| u        | Home         |
| o        | End          |
| n        | PageUp       |
| m        | PageDown     |
| ;        | Backspace    |
| p        | Delete       |
| c        | Copy         |
| x        | Cut          |
| v        | Paste        |
| e        | Undo         |
| r        | Redo         |

## Issues

This project was aimed at replacing an AutoHotKey script I wrote that directly remaps keydown events between keys. Sadly the VSCode extension API does not allow direct access to key events. This API would be necessary for all multi-key shortcuts that involve the above keys to work correctly without having to manually bind them to the appropriate VSCode commands, such as **Ctrl+j** for **cursorWordLeft**. The lack of a key event API also means all situational keybindings (of which there are many) would need to be hard coded too, the most important of which would be for the integrated terminal and command palette. Until key events are mappable using the extension API, I'm sticking with the AutoHotKey solution.
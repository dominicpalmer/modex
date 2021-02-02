# Modex

## Description
Modex is an unpublished VSCode extension that partially implements some of my favourite navigation keybindings. 

## Functionality
Modex uses capslock to toggle between two familiar modes: normal and insert. Insert mode leaves default keybindings unchanged. Normal mode maps navigation keys to the right hand of the home row, and maps some editing shortcuts to the left hand of the home row. The active mode is displayed on the status bar and indicated using an alteration to the caret.

Due to this extension using capslock to toggle modes, the underlying capslock state will be altered system wide during use. The capslock toggle works for me as I only ever hold shift to capitalise, but an alternative toggle key would be more suitable for those that use capslock regularly.

## Keybindings
Insert mode leaves default keybindings unchaged. Normal mode keybindings are as follows:

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
This project was aimed at replacing an AutoHotKey script I wrote to directly remap keydown events between keys. The VSCode extension API does not allow direct access to key events, which would be necessary for all multi-key shortcuts that involve the keys targeted by Modex to work correctly without having to manually bind them to the appropriate VSCode commands, such as **Ctrl+j** for **cursorWordLeft**. The lack of key event control also means all contextual keybindings (of which there are many) would need to be hard coded too, such as those for the integrated terminal and command palette. This solution was not ideal, so until key events are mappable using the VSCode extension API I'm sticking with the AutoHotKey solution.
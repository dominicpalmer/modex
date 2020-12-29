import { commands, window, workspace, ExtensionContext, StatusBarItem, StatusBarAlignment } from 'vscode';

// Create a status bar item
let statusBar: StatusBarItem;

// Keymap
const keymap: {[key:string]: string} = {
    "i": "cursorUp",
    "j": "cursorLeft",
    "k": "cursorDown",
    "l": "cursorRight",
    "u": "cursorHome",
    "o": "cursorEnd",
    "n": "cursorPageUp",
    "m": "cursorPageDown",
    ";": "deleteLeft",
    "p": "deleteRight",
    "c": "editor.action.clipboardCopyAction",
    "x": "editor.action.clipboardCutAction",
    "v": "editor.action.clipboardPasteAction",
    "e": "undo",
    "r": "redo",
};

// Entrypoint
export function activate(context: ExtensionContext) {
    let toggled = false;

    // Create the status bar indicator and update once at startup
    statusBar = window.createStatusBarItem(StatusBarAlignment.Left, Number.MIN_SAFE_INTEGER);
    context.subscriptions.push(statusBar);
    statusBar.text = 'INSERT';
    statusBar.show();

    // Get the workspace config
    const configuration = workspace.getConfiguration('workbench'); 

    // Register the toggle command
    context.subscriptions.push(commands.registerCommand('modex.toggle', () => {
        toggled = !toggled;
        commands.executeCommand('setContext', 'modex:toggled', toggled);

        if (toggled) {
            statusBar.text = 'NORMAL';
            configuration.update('colorCustomizations', {"editorCursor.foreground": "#FF0000"}, true);
        } else {
            statusBar.text = 'INSERT';
            configuration.update('colorCustomizations', {"editorCursor.foreground": undefined}, true);
        }
    }));

    // Template mapping between a key and a VSCode command
    context.subscriptions.push(commands.registerCommand('modex.keyEvent', ({ binding: key }) => {
        if (!toggled) {
            return;
        };

        commands.executeCommand(keymap[key]);
    }));
}
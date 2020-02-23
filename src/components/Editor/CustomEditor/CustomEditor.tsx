import React from 'react';
import { Editor, Transforms, Text } from 'slate';
import { ReactEditor } from 'slate-react';
import { TEXTMODE } from '../../../data/enums/enums';

const CustomEditor = {
    TAB_4_SPACES: '    ',

    isBoldMarkActive(editor: Editor & ReactEditor) {
        const [match] = Editor.nodes(editor, {
            match: n => n.bold === true,
            universal: true,
        });
    
        return !!match;
    },

    isItalicMarkActive(editor: Editor & ReactEditor) {
        const [match] = Editor.nodes(editor, {
            match: n => n.italic === true,
            universal: true,
        });

        return !!match;
    },
  
    isCodeBlockActive(editor: Editor & ReactEditor) {
        const [match] = Editor.nodes(editor, {
            match: n => n.type === TEXTMODE.code,
        });
    
        return !!match;
    },
  
    toggleBoldMark(
        editor: Editor & ReactEditor, 
        event: React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLSpanElement, MouseEvent>
    ) {
        event.preventDefault();
        const isActive = this.isBoldMarkActive(editor);
        Transforms.setNodes(
            editor,
            { bold: isActive ? null : true },
            { match: n => Text.isText(n), split: true },
        );
    },

    toggleItalicMark(
        editor: Editor & ReactEditor, 
        event: React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLSpanElement, MouseEvent>
    ) {
        event.preventDefault();
        const isActive = this.isItalicMarkActive(editor);
        Transforms.setNodes(
            editor,
            { italic: isActive ? null : true },
            { match: n => Text.isText(n), split: true },
        );
    },
  
    toggleCodeBlock(
        editor: Editor & ReactEditor, 
        event: React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLSpanElement, MouseEvent>
    ) {
        event.preventDefault();
        const isActive = this.isCodeBlockActive(editor)
        Transforms.setNodes(
            editor,
            { type: isActive ? null : TEXTMODE.code },
            { match: n => Editor.isBlock(editor, n) },
        );
    },

    insertTab(editor: Editor & ReactEditor) {
        editor.insertText(this.TAB_4_SPACES);
    },
}

export default CustomEditor;

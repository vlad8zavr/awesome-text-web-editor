import React from 'react';
import CustomEditor from '../CustomEditor/CustomEditor';
import { Editor } from 'slate';
import { ReactEditor } from 'slate-react';

interface Props {
    editor: Editor & ReactEditor;
}

const Toolbar = (props: Props) => (
    <div className='toolbar'>
        <span
            className='toolbar__item material-icons'
            onMouseDown={event => CustomEditor.toggleBoldMark(props.editor, event)}
        >format_bold</span>
        <span
            className='toolbar__item material-icons'
            onMouseDown={event => CustomEditor.toggleItalicMark(props.editor, event)}
        >format_italic</span>
        <span
            className='toolbar__item material-icons'
            onMouseDown={event => CustomEditor.toggleCodeBlock(props.editor, event)}
        >code</span>
    </div>
);

export default Toolbar;

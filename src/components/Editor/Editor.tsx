import React, { useMemo, useState, useRef } from 'react';
import { withReact, Slate, Editable } from 'slate-react';
import { createEditor, Editor } from 'slate';
import { initialValue } from '../../data/slateValue/slateInitValue';

interface Child {
    text: string;
    bold?: boolean;
};

interface GreatInterface {
    [key: string]: string | GreatInterface;
}

interface State {
    type: string;
    children: Child[];
};

const SyncingEditor: React.FC = () => {
    const editor = useMemo(() => withReact(createEditor()), []);
    const [value, setValue] = useState(initialValue);

    const editorRef = useRef<Editor | null>(null);
    const remoteRef = useRef(null);

    return (
        <Slate 
            editor={editor} 
            value={value} 
            onChange={value => setValue(value as State[])}
        >
            <Editable
                onKeyDown={event => {
                    if (event.key === '&') {
                        event.preventDefault();
                        editor.insertText('and');
                    }
                }}
            />
        </Slate>
    );
}

export default SyncingEditor;

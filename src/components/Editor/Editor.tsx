import React, { useMemo, useState, useRef, useCallback } from 'react';
import { withReact, Slate, Editable, useSlate } from 'slate-react';
import { createEditor, Editor, Transforms, Text } from 'slate';
import { initialValue } from '../../data/slateValue/slateInitValue';
import { DefaultElement, CodeElement } from './Elements/Elements';
import Leaf from './Leaf/Leaf';
import { State } from '../../interfaces/interfaces';

const SyncingEditor: React.FC = () => {
    const editor = useMemo(() => withReact(createEditor()), []);
    const [value, setValue] = useState(initialValue);

    const editorRef = useRef<Editor | null>(null);
    const remoteRef = useRef(null);

    const renderElement = useCallback((props: any) => {
        switch (props.element.type) {
          case 'code':
            return <CodeElement {...props} />
          default:
            return <DefaultElement {...props} />
        }
    }, []);

    // Define a leaf rendering function that is memoized with `useCallback`.
    const renderLeaf = useCallback(props => {
        return <Leaf {...props} />
    }, []);

    const handleKeyDownEvent = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.ctrlKey) {
            switch (event.key) {
                case '`': {
                    event.preventDefault();
                    // Determine whether any of the currently selected blocks are code blocks.
                    const [match] = Editor.nodes(editor, {
                        match: n => n.type === 'code',
                    });
                    // Toggle the block type depending on whether there's already a match.
                    Transforms.setNodes(
                        editor,
                        { type: match ? 'paragraph' : 'code' },
                        { match: n => Editor.isBlock(editor, n) }
                    );
                    break;
                }
                case 'b': {
                    event.preventDefault();
                    const [match] = Editor.nodes(editor, {
                        match: n => n.bold === true,
                    });
                    Transforms.setNodes(
                        editor,
                        { bold: match ? false : true },
                        // Apply it to text nodes, and split the text node up if the
                        // selection is overlapping only part of it.
                        { match: n => Text.isText(n), split: true }
                    );
                    break;
                }
            }
        } else {
            switch (event.key) {
                case 'Tab': {
                    event.preventDefault();
                    editor.insertText('    ');
                }
            }
        }
    }

    return (
        <div className='editor-field'>
            <Slate 
                editor={editor} 
                value={value} 
                onChange={value => setValue(value as State[])}
            >
                <Editable
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
                    onKeyDown={handleKeyDownEvent}
                />
            </Slate>
        </div>
    );
}

export default SyncingEditor;

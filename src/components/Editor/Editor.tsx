import React, { useMemo, useState, useRef, useCallback } from 'react';
import { withReact, Slate, Editable, useSlate } from 'slate-react';
import { createEditor, Editor, Transforms, Text } from 'slate';
import { initialValue } from '../../data/slateValue/slateInitValue';
import { DefaultElement, CodeElement } from './Elements/Elements';
import Leaf from './Leaf/Leaf';
import { State } from '../../data/interfaces/interfaces';
import { KEYS, TEXTMODE } from '../../data/enums/enums';
import CustomEditor from './CustomEditor/CustomEditor';

const SyncingEditor: React.FC = () => {
    const editor = useMemo(() => withReact(createEditor()), []);
    const [value, setValue] = useState(initialValue);

    const editorRef = useRef<Editor | null>(null);
    const remoteRef = useRef(null);

    const renderElement = useCallback((props: any) => {
        switch (props.element.type) {
          case TEXTMODE.code:
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
                case KEYS.tilda: {
                    event.preventDefault();
                    CustomEditor.toggleCodeBlock(editor);
                    break;
                }
                case KEYS.bold: {
                    event.preventDefault();
                    CustomEditor.toggleBoldMark(editor);
                    break;
                }
            }
        } else {
            switch (event.key) {
                case KEYS.tab: {
                    event.preventDefault();
                    CustomEditor.insertTab(editor);
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

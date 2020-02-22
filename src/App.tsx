import React, { useEffect, useMemo, useState } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

interface Child {
    text: string;
};

interface State {
    type: string;
    children: Child[];
};

const App = () => {
    const editor = useMemo(() => withReact(createEditor()), []);
    const [value, setValue] = useState([
        {
          type: 'paragraph',
          children: [{ text: 'A line of text in a paragraph.' }],
        },
      ]);
    return (
        <Slate 
            editor={editor} 
            value={value} 
            onChange={value => setValue(value as State[])}
        >
            <Editable />
        </Slate>
    );
}

export default App;

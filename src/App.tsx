import React from 'react';
import SyncingEditor from './components/Editor/Editor';

const App = () => {
    return (
        <div className='wrapper'>
            <div className='info-bar'>
                <div className='info-bar__item'><strong>code mode</strong>: Ctrl-`</div>
            </div>
            <div className='editor-field'>
                <SyncingEditor />
            </div>
        </div>
    );
}

export default App;

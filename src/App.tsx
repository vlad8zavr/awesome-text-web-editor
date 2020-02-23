import React from 'react';
import SyncingEditor from './components/Editor/Editor';

const App = () => {
    return (
        <div className='wrapper'>
            <div className='info-bar'>
                <div className='info-bar__item'>toggle <strong>code mode</strong>: Ctrl-`</div>
                <div className='info-bar__item'>toggle <strong>bold text</strong>: Ctrl-b</div>
            </div>
            <div className='editor-field'>
                <SyncingEditor />
            </div>
        </div>
    );
}

export default App;

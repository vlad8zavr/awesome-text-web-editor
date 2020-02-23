import React from 'react';
import SyncingEditor from './components/Editor/Editor';
import InfoBar from './components/InfoBar/InfoBar';

const App = () => {
    return (
        <div className='wrapper'>
            <InfoBar />
            <SyncingEditor />
        </div>
    );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import {QrCodeGenerator} from "./components/QRCodeGenerator";

function App() {
    const [text, setText] = useState('');
    return (
        <div className="App">
            <header className="App-header">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <QrCodeGenerator value={text}/>
            </header>
        </div>
    );
}

export default App;

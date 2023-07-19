import React, {useState} from 'react';
import './App.css';
import {QrCodeGenerator} from "./components/QRCodeGenerator";

function App() {
    const [text, setText] = useState('');
    return (
        <div className="App">
            <header className="App-header">
                <input
                    className="input-text"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <div className="qr-code">
                    <QrCodeGenerator value={text}/>
                </div>
            </header>
        </div>
    );
}

export default App;

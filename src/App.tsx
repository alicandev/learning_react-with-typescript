import React from 'react';
import logo from './logo.svg';
import './App.css';

// Tuple:
let aTuple: [string, number] = ["Alican", 21];
// Enum:
enum Codes {first = 1, second = 2}
// Any:
let firstName: any = "Alican"
// Void:
const warning = (): void => console.log("Warning.");

let App = () =>
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>The value {firstName} is of {typeof firstName} type!</p>
        </header>
    </div>


export default App;

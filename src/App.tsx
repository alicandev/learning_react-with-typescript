import React from 'react';
import logo from './logo.svg';
import './App.css';

// let firstValue: string = "Manny";
// let firstValue: number = 34;
// let firstValue: boolean = true;
// let firstValue: number[] = [ 2, 3, 5, 6 ];
let firstValue: Array<string> = [ '2', '3', 'Manny' ];

let App = () => 
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                The value {firstValue} is of {typeof firstValue} type!
            </p>
        </header>
    </div>

export default App;

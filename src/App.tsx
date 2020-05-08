import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from "./Message"

export interface IState {
    name: string;
    message: string;
}

const initialState : IState = {
    name: 'Alican',
    message: 'TypeScript is cool.'    
}

type State = Readonly<IState>;

class App extends Component<any, State> {
    readonly state: State = initialState;
    render = () =>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Message 
                    name={this.state.name}
                    message={this.state.message}
                />
            </header>
        </div>
}

export default App;

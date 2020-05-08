import React from 'react';

export interface IState {
    name: string;
    message: string;
}

const initialState: IState = {
    name: 'Alican',
    message: 'HOCs are cool.'
}

type State = Readonly<IState>;

const state: State = initialState;

const messageHoc = (WrappedComponent: any) => 
    () => <WrappedComponent name={state.name} message={state.message} />
    
export default messageHoc;

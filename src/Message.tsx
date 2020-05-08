import React from 'react';
import {IState} from './App'

const Message = (um: IState): any => 
    <p>{ um.name }, { um.message }</p>

export default Message;


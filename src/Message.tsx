import React from 'react';

interface UserMessage {
    name: string;
    message: string;
}

const Message = (um: UserMessage): any => 
    <p>{ um.name }, { um.message }</p>

export default Message;


import React from 'react';
import messageHoc from './Hoc';

const component = (props: any): any => <p>{props.name}, {props.message}</p>

const Message = messageHoc(component);

export default Message;


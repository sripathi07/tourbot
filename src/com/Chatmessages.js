/*import React from 'react'
import { Person, ChatDots } from "react-bootstrap-icons";


export default function Chatmessages(props) {
    return (
        <div className={`d-flex ${props.user && 'justify-content-end'}`}>{
            props.user ? (

                <span className='message-right'>
                    <span className='message-text'>{props.message}</span>
                    <Person className='message-icon' />

                </span>
            ) : (
                <span className='message-left'>

                    <ChatDots className='message-icon' />
                    <span className='message-text'>{props.message}</span>
                </span>
            )}
        </div>
    );
}
*/
import React from 'react';
import { Person, ChatDots } from "react-bootstrap-icons";
import { Col } from 'react-bootstrap';

export default function Chatmessages(props) {
    return (
        <Col xs={12} className={`d-flex ${props.user ? 'justify-content-end' : 'justify-content-start'}`}>
            {props.user ? (
                <div className='message-right'>
                    <div className='message-text'>{props.message}</div>
                    <Person className='message-icon' />
                </div>
            ) : (
                <div className='message-left'>
                    <ChatDots className='message-icon' />
                    <div className='message-text'>{props.message}</div>
                </div>
            )}
        </Col>
    );
}

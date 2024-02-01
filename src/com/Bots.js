
import React, { useState } from 'react';
import Chatmessages from './Chatmessages';
import { Button, Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { analyze } from './uti';

export default function Bots() {
    const [messages, setMessages] = useState([
        {
            message: "hi, what is your name",
        },
    ]);
    const [text, setText] = useState("");

    const onSend = () => {
        let list = [...messages, { message: text, user: true }];
        if (list.length > 2) {
            const reply = analyze(text);
            list = [
                ...list,
                { message: reply }
            ];
        } else {
            list = [
                ...list,
                {
                    message: `hi, ${text}`
                },
                {
                    message: "Which District do you want to visit in Tamilnadu"
                },
                {
                message:"I suggest you popular places "
            }

        ];
    }
   
        setMessages(list);
        setText("");
        setTimeout(() => {
            document.querySelector("#copyright").scrollIntoView();
        }, 1);
    };

    return (
        <Container>
            <Row className='d-flex align-items-center justify-content-center'>
               
                <Col>
                    <h1 className='text-primary'>Tourism</h1>
                </Col>
            </Row>
            <Row className="chat-message">
                {messages.length > 0 && messages.map((data, index) => <Chatmessages key={index} {...data} />)}
                <Row className='mt-2'>
                    <Col xs={9}>
                       <InputGroup>
                            <FormControl
                                type="text"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="Type your message here..."
                            />
                        </InputGroup>
                    </Col>
                    <Col xs={3}>
                        <Button variant="primary" onClick={onSend}>Send</Button>
                    </Col>
                </Row>
                <div id="copyright">@copyright reserved</div>
            </Row>
        </Container>
    );
}

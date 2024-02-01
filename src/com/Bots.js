
import React, { useState } from 'react';
import Chatmessages from './Chatmessages';
import {Button} from "react-bootstrap";
import { analyze } from './uti';

export default function Bots() {
    const [messages, setMessages] = useState([
        {
            message: "hi, what is your name",
        },
    ]);
    const [text, setText] = useState("");
    const onSend = () => {
        let list = [...messages, { message: text, user: true }]
        if (list.length > 2) {
            const reply = analyze(text);
            list=[
                ...list,
                {message:reply}
            ];
          

        }
    
    else {
        list = [
            ...list,
            {
                message: `hi,${text}`
            },
            {
                message:"Which District do you want to visit in Tamilnadu"
            },
            {
                message:"I suggest you popular places "
            }

        ];
    }
   
    setMessages(list)
    setText("")
    setTimeout(()=>{
        document.querySelector("#copyright").scrollIntoView();
    },1);
};
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <img src="nnn.jpeg"
                    height={200}
                    width={200} />
                <h1 className='text-primary'>Tourism</h1>
            </div>
            <div className="chat-message" >{
                messages.length > 0 && messages.map((data) => <Chatmessages {...data} />)}
                <div className='d-flex mt-2'>
                    <input type="text" className='form-control' value={text} onChange={(e) => setText(e.target.value)}></input>
                    <Button type="primary" className='ms-2' onClick={onSend}>send</Button>
                </div>
                <div id="copyright">@copyright reserved</div>
            </div>
        </div>
    );
}

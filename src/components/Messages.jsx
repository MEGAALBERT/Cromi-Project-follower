import React from 'react'
import '../App.css';
import { useSelector, useDispatch } from "react-redux";
import { SET_MESSAGES } from "../reducers/index";
import axios from "axios";
const memBack = require("../images/backMem.jpg");

export default function Messages() {

const dispatch = useDispatch();

    async function getMessages(){
        let req = await axios.get("api/messages");
        const data = req.data;
        dispatch(SET_MESSAGES(data))
    }

    const myStyle = {
        backgroundImage :`url(${memBack})`,
        backgroundSize : "350px"
    }
const messages = useSelector((state)=> state.messages);

    return (
        <div className="right-side" style={myStyle} >
           <button type="submit" className="btn btn-primary" onClick={getMessages}>Mensajes</button>
            {messages.map(message => (
                <p className="members">Nombre: {message.contact_name} <br />
                Email {message.contact_email} <br />
                {message.contact_message} <br />
                </p>
            ))}
        </div>
    )
}



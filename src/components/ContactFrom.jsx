import React from 'react'
import '../App.css';
import { useDispatch, useSelector } from "react-redux";
import { SET_CONTACT_NAME, SET_CONTACT_EMAIL, SET_CONTACT_MESSAGE } from "../reducers/index";
import axios from "axios";

const mex = require("../images/Mexicali.jpg");


export default function ContactFrom() {

    const myStyle = {
        backgroundImage :`url(${mex})`,
        backgroundSize : "450px"
    }

const dispatch = useDispatch();

const contactName = useSelector((state)=> state.contactName);
const contactEmail = useSelector((state)=> state.contactEmail);
const contactMessage = useSelector((state)=> state.contactMessage);

async function handleSubmit(event){
    event.preventDefault();
    const res = await axios.post("/api/messages",{
        contact_name: contactName,
        contact_email: contactEmail,
        contact_message: contactMessage
    })
    console.log(res);
}


    return (
<div className="footer" style={ myStyle}>
    <form id="contact-form" onSubmit={handleSubmit} >
        <label htmlFor="name"> Nombre </label>
        <input type="text" className="form-control" onChange={(e)=> {
            dispatch(SET_CONTACT_NAME(e.target.value))
        }}/>
        <label htmlFor="exampleInputEmail1"> Correo Electronico </label>
        <input type="email" className="form-control" aria-describedby="emailHelp"  onChange={(e)=> {
            dispatch(SET_CONTACT_EMAIL(e.target.value))
        }}/>
        <label htmlFor="message"> Mensaje </label>
        <textarea className="form-control" rows="5" onChange={(e)=> {
            dispatch(SET_CONTACT_MESSAGE(e.target.value))
        }}></textarea>
        <button type="submit" className="btn btn-primary"> Enviar </button>
    </form>
</div>
    )
}



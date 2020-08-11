import React from 'react'
import '../App.css';
import { useDispatch, useSelector } from "react-redux";
import { SET_MEMBERS } from "../reducers/index";
import axios from "axios";
const memBack = require("../images/backMem.jpg");

export default function Members() {

    const myStyle = {
        backgroundImage :`url(${memBack})`,
        backgroundSize : "350px"
    }

const dispatch = useDispatch();

const members = useSelector((state)=> state.members);

async function getMembers(){
    const value = document.getElementById("memberValue").value
    let req;
    if(value !== ""){
        req = await axios.get(`api/members/${value}`);
    } else {
        req = await axios.get("api/members");
    }
    const data = req.data;
    console.log(data);
    console.log(members)
    dispatch(SET_MEMBERS(data))
    console.log(members)
}

    return (
        <div className="left-side" style={myStyle}>
            <input id="memberValue" type="text" className="form-control" /><br/>
            <button type="submit" className="btn btn-primary" onClick={getMembers}>Buscar Miembros</button>
            {members.map(member =>(
            <p className="members">Nombre: {member.member_name} <br />
            Mote: {member.mote} <br />
            Actividad en el club: {member.actividad} <br />
            Correo Electronico: <a href='https://www.facebook.com/crmexicaliindustrial/'>{member.correo_electronico}</a>
            </p>
            ))}
        </div>
    )
}



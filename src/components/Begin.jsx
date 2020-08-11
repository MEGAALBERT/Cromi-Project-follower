import React from 'react';
import '../App.css';
// images
const cromiBack = require("../images/backCromi.jpg");
const logo = require("../images/emblem.svg");

export default function Begin() {


    const myStyle = {
        backgroundImage :`url(${cromiBack})`,
        backgroundSize : "400px"
    }
    return (
        <div className="main" style={myStyle}>
            <h1 className="storyTitle">Bienvenidos a CLUB ROTARIO MEXICALI INDUSTRIAL</h1>
            <img src={logo} alt="Mexicali" /><br/>
            <h2 className="storyTitle">Login Solo para Miembors del Club</h2>
            <label htmlFor="name"> Correo Electronico </label>
            <input type="text" className="form-control" />
            <label htmlFor="name"> Password </label>
            <input type="text" className="form-control" />
            <button type="submit" className="btn btn-primary"> Entrar </button>
        </div>
    )
}



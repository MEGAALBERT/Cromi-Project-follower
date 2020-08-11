import React from 'react';
import '../App.css';

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
            <img src={logo} alt="Mexicali" />
        </div>
    )
}



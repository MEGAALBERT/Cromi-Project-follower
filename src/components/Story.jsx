import React from 'react'
import '../App.css';

const cromiBack = require("../images/backCromi.jpg");

export default function Story() {

    const myStyle = {
        backgroundImage :`url(${cromiBack})`,
        backgroundSize : "400px"
    }
    return (
        <div className="main" style={myStyle}>
            <h2 className="storyTitle">La historia de Cromi</h2>
        </div>
    )
}



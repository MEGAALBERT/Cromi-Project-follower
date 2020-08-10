import React from 'react'
import '../App.css';
const cromiBack = require("../images/backCromi.jpg")

function Main() {

    const myStyle = {
        backgroundImage :`url(${cromiBack})`,
        backgroundSize : "400px"

    }
    return (
        <div className="main" style={ myStyle}>
            <p>Mostrar los proyectos</p>
        </div>
    )
}

export default Main

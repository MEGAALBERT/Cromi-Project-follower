import React from 'react'
import '../App.css';
const cromiLogo = require("../images/CROMI1.jpg")

function Header() {
    return (
        <div className="header">
            <button className="headerbtn">Inicio</button>
            <button className="headerbtn">Historia</button>
            <button className="headerbtn">Proyectos</button>
           <img className="headerImg"src={cromiLogo} alt="logo" width="400" height="100" />
        </div>
    )
}

export default Header

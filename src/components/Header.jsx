import React from 'react'
import '../App.css';
const cromiLogo = require("../images/CROMI1.jpg")

function Header() {
    return (
        <div className="header">
           <img src={cromiLogo} alt="logo" width="400" height="100" />
        </div>
    )
}

export default Header

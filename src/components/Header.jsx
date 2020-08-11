import React from 'react'
import '../App.css';
import { useDispatch } from "react-redux";
import { SET_MAIN_PAGE } from "../reducers/index";
const cromiLogo = require("../images/CROMI1.jpg")

function Header() {



const dispatch = useDispatch();

    return (
        <div className="header">
            <button className="headerbtn" onClick={()=> {
                dispatch(SET_MAIN_PAGE("begin"))
            }}>Inicio</button>
            <button className="headerbtn" onClick={()=> {
                dispatch(SET_MAIN_PAGE(""))
            }}>Historia</button>
            <button className="headerbtn" onClick={()=> {
                dispatch(SET_MAIN_PAGE("main"))
            }}>Proyectos</button>
           <img className="headerImg"src={cromiLogo} alt="logo" width="400" height="100" />
        </div>
    )
}

export default Header

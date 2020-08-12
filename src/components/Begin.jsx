import React from 'react';
import '../App.css';
import { useDispatch, useSelector } from "react-redux";
import { SET_MEMBER_EMAIL, SET_MEMBER_PASSWORD} from "../reducers/index";
//import { Auth } from "aws-amplify";
// images
const cromiBack = require("../images/backCromi.jpg");
const logo = require("../images/emblem.svg");

export default function Begin() {
    function validateForm() {
        return memberEmail.length > 0 && memberPassword.length > 0;
      }
const members = useSelector((state)=> state.members);
const memberEmail = useSelector((state)=> state.memberEmail);
const memberPassword = useSelector((state)=> state.memberPassword);
    const myStyle = {
        backgroundImage :`url(${cromiBack})`,
        backgroundSize : "400px"
    }

const dispatch = useDispatch();

async function handleSubmit(event){
     event.preventDefault();
    }


    return (
        <div className="main" style={myStyle}>
            <h1 className="storyTitle">Bienvenidos a CLUB ROTARIO MEXICALI INDUSTRIAL</h1>
            <img className="rotate" src={logo} alt="Mexicali" /><br/>
            <h2 className="storyTitle">Login Solo para Miembros del Club</h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name"> Correo Electronico </label>
            <input type="text" className="form-control" onChange={(e)=>
                dispatch(SET_MEMBER_EMAIL(e.target.value))
            }/>
            <label htmlFor="password"> Password </label>
            <input type="text" className="form-control"  onChange={(e)=>
                dispatch(SET_MEMBER_PASSWORD(e.target.value))
            } />
            <button type="submit" className="btn btn-primary" disabled={!validateForm()}> Entrar </button>
            </form>
        </div>
    )
}



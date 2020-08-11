import React from 'react'
import '../App.css';
const memBack = require("../images/backMem.jpg");

export default function Members() {

    const myStyle = {
        backgroundImage :`url(${memBack})`,
        backgroundSize : "350px"
    }

    return (
        <div className="left-side" style={myStyle}>
            <h2>Miembros del Club</h2>
            <input id="projectValue" type="text" className="form-control" /><br/>
            <button type="submit" className="btn btn-primary">Buscar Miembros</button>
            <p className="members">Nombre: Alberto Medellin <br />
                Mote: Mochi <br />
                Actividad en el club: Social Media Admin <br />
                Correo Electronico: mochi@gmail.com
            </p>
            <p className="members">Nombre: Alberto Medellin <br />
                Mote: Mochi <br />
                Actividad en el club: Social Media Admin <br />
                Correo Electronico: <a href='albertomedellin85@gmail.com'>mochi@gmail.com</a>
            </p>
        </div>
    )
}



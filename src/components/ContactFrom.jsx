import React from 'react'
import '../App.css';

export default function ContactFrom() {


    return (
        <div className="footer">
            <form id="contact-form" >
        <label htmlFor="name"> Nombre </label>
        <input type="text" className="form-control" />
        <label htmlFor="exampleInputEmail1"> Correo Electronico </label>
        <input type="email" className="form-control" aria-describedby="emailHelp" />
        <label htmlFor="message"> Mensaje </label>
        <textarea className="form-control" rows="5"></textarea>
        <button type="submit" className="btn btn-primary"> Enviar </button>
</form>
        </div>
    )
}



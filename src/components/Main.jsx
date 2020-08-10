import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { SET_PROJECTS } from "../reducers/index";
import '../App.css';
import axios from "axios";
const cromiBack = require("../images/backCromi.jpg");




export default  function Main() {

const dispatch = useDispatch();

let projects = useSelector((state)=> state.projects);



async function getProjects(){
    let req = await axios.get("api/projects");
    const data = req.data;
    console.log(data);
    console.log(projects)
    dispatch(SET_PROJECTS(data))
    console.log(projects)
}



    const myStyle = {
        backgroundImage :`url(${cromiBack})`,
        backgroundSize : "400px"
    }
    return (
        <div className="main" style={ myStyle}>
            <button onClick={getProjects}>Mostrar Proyectos</button>
            {projects.map(project => (
                <span>
                <h3>Proyecto: {project.project_name}</h3><br/>
                <p>Descripcion: {project.description}</p><br/>
                <p>Si esta interesado en apoyar al proyecto contactar : {project.contact_info}</p>
                <img src={project.image} alt="projectImg" width="500" height="250"/>
                </span>
            ))}
        </div>
    )
}


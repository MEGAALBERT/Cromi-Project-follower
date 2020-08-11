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

async function getProjectsByName(name){
    let req = await axios.get(`api/projects/${name}`);
    const data = req.data;
    console.log(data);
    console.log(projects)
    dispatch(SET_PROJECTS(data));
    console.log(projects)
}

const handleInput=()=>{
    const value = document.getElementById("project").value;
    getProjectsByName(value);
}

    const myStyle = {
        backgroundImage :`url(${cromiBack})`,
        backgroundSize : "400px"
    }
    return (
        <div className="main" style={ myStyle}>
            <input id="project" type="text" className="form-control" />
            <button type="submit" className="btn btn-primary" onClick={() => handleInput()}>Buscar</button>
            <button onClick={() => getProjects()}>Mostrar Todos los Proyectos</button>
            {projects.map(project => (
                <span>
                <h3>Proyecto: {project.project_name}</h3><br/>
                <p>Descripcion: {project.description}</p><br/>
                <p>Si esta interesado en apoyar al proyecto contactar : <b>{project.contact_info}</b></p>
                <img className="image"src={project.image} alt="projectImg" width="500" height="250"/>
                </span>
            ))}
        </div>
    )
}


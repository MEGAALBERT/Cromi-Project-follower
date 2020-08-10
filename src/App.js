import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import ContactFrom from "./components/ContactFrom";

function App() {
  return (
    <div className="parent">
    <Header/>
    <div className="left-side blue section" contenteditable>Para Filtrar Proyectos</div>
    <Main/>
    <div className="right-side yellow section" contenteditable>Mostrar fotos</div>
    <ContactFrom />
  </div>
  );
}

export default App;

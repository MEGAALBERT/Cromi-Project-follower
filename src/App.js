import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="parent">
    <Header/>
    <div className="left-side blue section" contenteditable>Para Filtrar Proyectos</div>
    <Main/>
    <div className="right-side yellow section" contenteditable>Mostrar fotos</div>
    <footer class="green section">Forma para mandar correos</footer>
  </div>
  );
}

export default App;

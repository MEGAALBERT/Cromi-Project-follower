import React from 'react';
import './App.css';
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Main from "./components/Main";
import ContactFrom from "./components/ContactFrom";
import Members from "./components/Members";
import Story from "./components/Story";
import Begin from "./components/Begin";

function App() {

const mainPage = useSelector((state)=> state.mainPage)

  return (
    <div className="parent">
    <Header/>
    <Members />
    { mainPage==="begin" ?
    <Begin/>
    : mainPage === "main" ?
    <Main/>
    : 
    <Story/>
    }
    <ContactFrom />
  </div>
  );
}

export default App;

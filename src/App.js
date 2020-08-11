import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import ContactFrom from "./components/ContactFrom";
import Members from "./components/Members";

function App() {
  return (
    <div className="parent">
    <Header/>
      <div className="left-side blue section" contenteditable>
      <Members />
      </div>
    <Main/>
    <ContactFrom />
  </div>
  );
}

export default App;

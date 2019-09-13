import React from 'react';
import './App.css';
import Header from "./components/Header";
import DataCall from "./components/DataCall";
import { Global } from "./components/Styles";

const App = () => {

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <h1 className="starHeader">SW API Data </h1>
      <Header />
      <Global>
      <DataCall />
      </Global>
    </div>
  );
}

export default App;
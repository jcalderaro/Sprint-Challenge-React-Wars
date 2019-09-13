/* 
    SPRINT CHALLENGE MVP STEP:
        1) Locate the previous React JS Code found in App.js
        2) Copy it into HookApp.js
        3) Refactor the code to incorpoate Hooks

*/ 

/* Failing to Reach Sprint Goal */ 

/* 

    CONCERNS:
        1) Make sure I am not missing any extra ()'s or {}'s
        2) Define my getChars function
        3) Define the Hook

        Declaring a function can be done via
            A) Function getChars(url) {...}
                or
            B) Const getChars = (url) => {...}

*/ 

import React, { Component } from 'react';
import './App.css';

const App = props => {
const getChars = URL => /* {...}; */
const componentDidMountHook = () => /* define the hook here */
return (
      <div className="App">
        <h1 className="Header">Star Wars Hall of Fame</h1>
        {this.state.starwarsChars.map(x => {
          return (
            <div style={{ background: 'white', width: '50%', margin: 'auto'}}>
              <h3 className="starWars">{x.name}</h3>
              <h4 className="traits"> Hair Color: {x.hair_color} Gender: {x.gender} Height: {x.height} </h4>
            </div>
          )
        })}
      </div>
    );
  }

export default App;
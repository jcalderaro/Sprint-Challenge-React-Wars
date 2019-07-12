import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };  

  render() {
    console.log(this.state.starwarsChars);
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

}
export default App;
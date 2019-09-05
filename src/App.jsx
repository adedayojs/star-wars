import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from './Components/Jumbotron/Jumbotron'
import PopularStarships from './Components/PopularStarships/PopularStarships'

function App() {
  const content = [1,2,4,5,6,5]
  const characters = ['./assets/character-1.jpg', './assets/character-3.jpg','./assets/character-2.jpg','./assets/character-4.jpg']
  const starships = ['./assets/starship-1.jpg', './assets/starship-3.jpg','./assets/starship-2.jpg','./assets/starship-4.jpg']
  const planets = ['./assets/planet-1.jpg', './assets/planet-3.jpg','./assets/planet-2.jpg']
  return (
    <>
    <Jumbotron/>
    <PopularStarships {...{content:content,title:'Starships',images:starships}}/>
    {/* <Popular {...{content:content,title:'Planets', images:planets}}/> */}
    {/* <Popular {...{content:content,title:'Characters',images:characters}}/> */}
    </>
  );
}

export default App;

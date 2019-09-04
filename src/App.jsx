import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from './Components/Jumbotron/Jumbotron'
import Popular from './Components/Popular/Popular'

function App() {
  const content = [1,2,4]
  return (
    <>
    <Jumbotron/>
    <Popular {...{content:content,title:'Starships'}}/>
    <Popular {...{content:content,title:'Planets'}}/>
    <Popular {...{content:content,title:'Characters'}}/>
    </>
  );
}

export default App;

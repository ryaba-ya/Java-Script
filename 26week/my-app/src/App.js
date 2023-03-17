import React from 'react';
import './App.css';
import './components/hero'
import Hero from './components/hero';
import HeroesJson from  './components/heroes.json';



class App extends React.Component  {
  render(){
  return (
    <div className="App">
     {
HeroesJson.map((hero)=>
<Hero 
name={hero.name}

></Hero>
)
     }
    </div>
  );
}
}

export default App;

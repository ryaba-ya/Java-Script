import React from 'react';
import './App.css';
import './components/hero'
import Hero from './components/hero';

class App extends React.Component  {
  render(){
  return (
    <div className="App">
     <Hero name="Spiderman" ></Hero>
     <Hero name="Betman" ></Hero>
      
    </div>
  );
}
}

export default App;

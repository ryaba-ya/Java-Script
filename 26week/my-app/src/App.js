import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

// or less ideally
import { Button } from 'react-bootstrap';

class App extends React.Component  {
  render(){
  return (
    <div className="App">
      <div className="hero-card">
        <img src=''></img>
        <div className="hero-name">Spider-Man</div>
        <div className="hero-text">Lorem ipsun</div>
        
      </div>
      
    </div>
  );
}
}

export default App;

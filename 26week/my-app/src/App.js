import React from 'react';
import './App.css';
import './components/hero'

class App extends React.Component  {
  render(){
  return (
    <div className="App">
      <div className="hero-card">
       
        <div className="hero-name">Spider-Man</div>
        <div className="hero-text">Lorem ipsun</div>
        <button> Take home</button>
      </div>
      
    </div>
  );
}
}

export default App;

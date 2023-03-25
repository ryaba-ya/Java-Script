import React from 'react';
import TariffJson from './card_data.json'
import './App.css';
import Card from './components/Card'


function App() {
  return (
    <div className="App">
      {
        TariffJson.map((card)=>
        <Card >
name={card.name}
price={card.price}
speed={card.speed}
footer_text={card.footer_text}
        </Card>
        
        )

      }
    </div>
  );
}

export default App;

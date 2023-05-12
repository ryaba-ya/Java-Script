import React from 'react';
import TariffJson from './card_data.json'
import './App.scss';
import Card from './components/Card'


class App extends React.Component {
  render(){
  return (
    <div className="App">
      {
        TariffJson.map((card)=>
        <Card 
        name={card.name}
        price={card.price}
        speed={card.speed}
        footerText={card.footerText}
        color={card.color}
        selected={card.selected}>
        </Card>
        
        )

      }
    </div>
  );
}
}
export default App;

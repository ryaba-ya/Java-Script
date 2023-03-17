import React from 'react';
import './App.css';
import './components/hero'
import Hero from './components/hero';
import KitchenSinkExample from "./components/bootstrap-card"


class App extends React.Component  {
  render(){
  return (
    <div className="App">
     <Hero name="Spiderman" url="https://i0.wp.com/comicbookdispatch.com/wp-content/uploads/2021/12/img_3412.jpg?fit=675%2C1024&ssl=1"></Hero>
     <Hero name="Betman" url="https://sothebys-md.brightspotcdn.com/0f/56/3e0051094b1c9cfacf4fa1f608f3/023l20895-bj8tp.jpg"  ></Hero>
<KitchenSinkExample></KitchenSinkExample>
    </div>
  );
}
}

export default App;

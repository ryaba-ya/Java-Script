import React from 'react';
import './App.css';
import './components/hero'
import Hero from './components/hero';


class App extends React.Component  {
  render(){
  return (
    <div className="App">
     <Hero name="Spiderman" url="https://i0.wp.com/comicbookdispatch.com/wp-content/uploads/2021/12/img_3412.jpg?fit=675%2C1024&ssl=1"></Hero>
     <Hero name="Betman" url="https://sothebys-md.brightspotcdn.com/0f/56/3e0051094b1c9cfacf4fa1f608f3/023l20895-bj8tp.jpg" text='Подробнее:По популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности. Брюс знаменит, несмотря на пожилой возраст: первый выпуск с его участием вышел аж в 1939 году. С каждым годом популярность только крепнет. Большую роль в этом сыграли экранизации: «Темный рыцарь», сериал «Готэм» и несколько одноименных картин. Главная причина такой любви среди фанатов — мысль, что каждый может стать Бэтменом. Если подумать, это один из немногих героев, кто добился своего положения за счет ума и упорства, а не за счет мутаций.' ></Hero>

    </div>
  );
}
}

export default App;

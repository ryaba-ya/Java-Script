import './hero.css';

function Hero (props){
    return(
        <div className='hero-card'>
            <img className='hero-img ' src={props.img}/>
           <div className='card-body'>
           <div className='hero-name' >{props.name}</div>
            <div className ="hero-text">{props.details}</div>
            <div className="heroes-superpowers">
                <span>Вселенная: </span>
                {props.universe}
            </div>
            <div className="heroes-superpowers">
                <span>Альтер эго: </span>
                {props.alterEgo}
            </div>
            <div className="heroes-superpowers">
                <span>Род деятельности:</span>
                {props.occupation}
            </div>
            <div className="heroes-superpowers">
                <span>Друзья: </span>
                {props.friends}
            </div>
            <div className="heroes-superpowers">
                <span>Суперсилы: </span>
                {props.superPower}
            </div>
           </div>
          
           
           
            
            
        </div>
    )
}



export default Hero;
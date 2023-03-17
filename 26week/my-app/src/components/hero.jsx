import './hero.css';

function Hero (props){
    return(
        <div className='hero-card'>
            <img className='hero-img ' src={props.url}/>
           <div className='card-body'>
           <div className='hero-name' >{props.name}</div>
            <div className ="hero-text">{props.text}</div>
            <p className="heroes-superpowers">
                <span>Суперсилы: </span>
                {props.superpowers}
            </p>
           </div>
            
            
           
            
            
        </div>
    )
}



export default Hero;
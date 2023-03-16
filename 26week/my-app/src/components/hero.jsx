import './hero.css';
function Hero (props){
    return(
        <div className='hero-card'>
            <div className='hero-name' >{props.name}</div>
            <div className='hero-text'></div>
            <button>Take home</button>
        </div>
    )
}
export default Hero;
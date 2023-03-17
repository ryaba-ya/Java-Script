import './hero.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Hero (props){
    return(
        <Card className='hero-card'>
            <Card.img variant='top' className='hero-img ' src={props.url}/>
            <Card.Body>
            <Card.Text className='hero-name' >{props.name}</Card.Text>
            <div className='hero-text'></div>
            <Button>Take home</Button>
            </Card.Body>
            
            
        </Card>
    )
}



export default Hero;
import './card.css';
function Card(props) {
    return (
        <div className='card-wrap'>
<header className={`tariff-name ${props.color}`}>{props.name}</header>
<main className={`price ${props.color} `}>{props.price} руб/мес</main>
<div className='tariff-speed'> до{props.speed}  Мбит/сек</div>
<footer className='card-footer'>{props.footer_text}</footer>

        </div>
    )
}

export default Card;
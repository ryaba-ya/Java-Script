import './card.css';
function Card(props) {
    return (
        <div className='card-wrap'>
<header className='tariff-name'>{props.name}</header>
<main className='price '>{props.price} руб/мес</main>
<div className='tariff-speed'> до{props.speed}  Мбит/сек</div>
<footer className='card-footer'>{props.footer_text}</footer>
<color className={props.color}></color>
        </div>
    )
}

export default Card;
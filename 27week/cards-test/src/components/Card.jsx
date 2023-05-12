import './card.scss';
function Card(props) {
    const {isSelected } = props;
    return (
        <div className={`card-wrap ${props.selected}`}>
<header className={`tariff-name ${props.color}`}>{props.name}</header>
<main className={`price ${props.color} `}>{props.price} руб/мес</main>
<div className='tariff-speed'> до{props.speed}  Мбит/сек</div>
<footer className='card-footer grey'>{props.footerText}</footer>

        </div>
    )
}

export default Card;
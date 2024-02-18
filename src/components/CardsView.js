import ShopCard from './ShopCard';
import './css/cardsView.css';

/***************************************
*  Обёртка для карточек в столбик      *
***************************************/
export default function CardsView(props) {
  const { cards } = props;

  return (
    <div className='view-module'>
      {cards.map((card, index) => <ShopCard key={index} card={card} />)}
    </div>
  )
}
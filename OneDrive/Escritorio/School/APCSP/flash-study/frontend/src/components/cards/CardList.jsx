import {useContext} from 'react'
import CardItem from "./CardItem";
import CardContext from '../../context/CardsContext';

function CardList() {
  const {cards} = useContext(CardContext)

  if(!cards || cards.length === 0) {
    return <p>No Cards Yet</p>;
  }
  return (
    <ul className= "list mt-5">
      {cards.map((item) => (
        <div key={item.id}>
          <CardItem 
            key={item.id} 
            item={item} 
          />
        </div>
      ))}
    </ul>
  );
}

export default CardList
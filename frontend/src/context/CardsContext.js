import {createContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const CardsContext = createContext()

export const CardProvider = ({children}) => {

  const [cards, setCards] = useState([{
    id: 1,
    front: 'Apple',
    back: 'the fleshy, usually rounded red, yellow, or green edible pome fruit of a usually cultivated tree (genus Malus) of the rose family.'
  }])

  const [cardEdit, setCardEdit] = useState({
    item: {},
    edit: false
  })

  // Add card
  const addCard = (newCard) => {
    newCard.id = uuidv4();
    setCards([newCard, ...cards]);
  }

  // Add cards
  const addCards = (newCards) => {
    setCards([...newCards, ...cards]);
  }

  // Delete feedback
  const deleteCard = (id) => {
    if (window.confirm('Are you sure you want to delete?')){
      setCards(cards.filter((item) => item.id !== id))
    }
  };

  // Update feedback item
  const updateCards = (id, updItem) => {
    setCards(
      cards.map((item) => (item.id === id ? {...item, ...updItem} : item))
    )
  }

  // Set item to be updated
  const editCards = (item) => {
    setCardEdit({
      item,
      edit: true
    })
  }


  return (
    <CardsContext.Provider 
      value={{
        cards,
        setCards,
        addCard,
        addCards,
        cardEdit,
        setCardEdit,
        deleteCard,
        editCards,
        updateCards
      }}
    >
      {children}
    </CardsContext.Provider>
  )
}

export default CardsContext
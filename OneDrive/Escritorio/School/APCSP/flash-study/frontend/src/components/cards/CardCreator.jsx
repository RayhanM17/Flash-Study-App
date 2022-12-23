import { useContext, useState, useEffect} from "react"
import CardContext from '../../context/CardsContext'

function CardCreator() {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  const {addCard, cardEdit, updateCards} = useContext(CardContext)

  useEffect(() => {
    if(cardEdit.edit === true){
      setBtnDisabled(false)
      setFront(cardEdit.item.front)
      setBack(cardEdit.item.back)
    }
  }, [cardEdit])

  const handleTextChange = (e) => {
    if(front === '' && back === ''){
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }

    if(e.target.id === 'front'){
      setFront(e.target.value);
    } else {
      setBack(e.target.value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(front !== '' && back !== ''){
      const newCard = {
        front,
        back
      }

      if(cardEdit.edit === true) {
        updateCards(cardEdit.item.id, newCard)
      } else{
        addCard(newCard);
      }

      setFront('');
      setBack('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card bg-primary p-8 mt-7 text-white" 
    // onSubmit={}
    >
      <p className='card-title mb-5'> Create Flash Cards</p>
      <div className='form-control mb-8'>
        <p className="label">Enter Front</p>
        <input 
          type="text" 
          id='front'
          value={front}
          onChange={handleTextChange}
          className='input input-primary' 
        />
        <p className="label">Enter Back</p>
        <textarea
          type="text" 
          id='back'
          value={back}
          onChange={handleTextChange}
          className='input input-primary h-24' 
        />
      </div>
      <button disabled={btnDisabled} type='submit' className="btn">Submit</button>
    </form>
  )
}

export default CardCreator
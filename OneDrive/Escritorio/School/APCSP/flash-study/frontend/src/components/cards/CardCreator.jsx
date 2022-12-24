import { useContext, useState, useEffect} from "react"
import CardContext from '../../context/CardsContext'
import { toast } from 'react-toastify';

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
        toast('Card Updated', {
          position: toast.POSITION.BOTTOM_LEFT,
          theme: "dark"
        });
      } else{
        addCard(newCard);
        toast('Card Added', {
          position: toast.POSITION.BOTTOM_LEFT,
          theme: "dark"
        });
      }

      setFront('');
      setBack('');
    } else {
      toast.error('Please fill all fields', {
        position: toast.POSITION.BOTTOM_LEFT,
        theme: "dark"
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card bg-primary p-8 mt-7 text-white">
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
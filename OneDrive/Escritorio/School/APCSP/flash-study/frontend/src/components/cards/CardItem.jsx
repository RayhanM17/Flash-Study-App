import {AiFillDelete} from 'react-icons/ai'
import {BiEditAlt} from 'react-icons/bi'
import {useContext} from 'react'
import CardsContext from '../../context/CardsContext'

function CardItem({item}) {
  const {deleteCard, editCards} = useContext(CardsContext)

  return (
    <li className='card p-5 card-bordered border-r-2 border-secondary text-white'>
      <p>{item.front}</p>
      <p className='mt-4'>{item.back}</p>
      <div className='mt-4'>
        <button onClick={() => deleteCard(item.id)} className="btn btn-xs">
          < AiFillDelete />
        </button>
        <button onClick={() => editCards(item)} className="btn btn-xs">
          < BiEditAlt />
        </button>
      </div>
    </li>
  )
}

export default CardItem
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { useContext } from 'react'
import axios from 'axios'
import Spinner from '../layout/Spinner'
import CardContext from '../../context/CardsContext'

function FlashCardGenerator() {
  const {addCards} = useContext(CardContext)

  const [subject, setSubject] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    if(subject === ''){
      alert('Please type in a subject')
    } else {
      getList(`Create a list of 10 terms and defenitions seperated by a colon on the subject of ${subject}`)
      setSubject('')
    }


    e.preventDefault();
  }

  const getList = async (prompt) => {
    setLoading(true)
    axios.post('https://flashstudy.onrender.com:10000/openai/v1/completions', {
      prompt
    })
    .then(function (response) {
      //add id
      let data = response.data.data

      data = data.map((item) => ({
        front: item.front,
        back: item.back,
        id: uuidv4()
      }))

      addCards(data)
      setLoading(false)
      toast('Cards Generated', {
        position: toast.POSITION.BOTTOM_LEFT,
        theme: "dark"
      });
    })
    .catch(function (error) {
      console.log(error);
      setLoading(false)
      toast.error('Failed to Generate', {
        position: toast.POSITION.BOTTOM_LEFT,
        theme: "dark"
      });
    });
  }

  const onMutate = (e) => {
    setSubject(e.target.value)
  }

  if(loading) {
    return <Spinner />
  }

  return (
    <form className="card bg-primary p-8 text-white" onSubmit={onSubmit}>
      <p className='card-title mb-5'> Generate Flash Card Suggestions</p>
      <div className='form-control mb-8'>
        <p className="label">Enter Subject</p>
        <input 
          type="text" 
          id='subject'
          value={subject} 
          onChange={onMutate}
          className='input input-primary' 
        />
      </div>
      <button type='submit' className="btn">Submit</button>
    </form>
  )
}

export default FlashCardGenerator
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
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
    axios.post('http://localhost:5000/openai/v1/completions', {
      prompt
    })
    .then(function (response) {
      //turn response to array
      let data = response.data.data[0].text
      let res = []

      let termRe = /(\n){1,2}([^:]*)/g;
      let defRe = /:([^\n]*)\n/g

      let front = data.match(termRe)
      let back = data.match(defRe)
    
      // Clean data
      back = back.map((item) => (
        item.replace(/[:]|[.]|[\n]/g, "")
      ))
      front = front.map((item) => (
        item.replace(/[\n]|[\d]|[.]|[)]/g, "")
      ))

      for(let i = 0; i < front.length; i++) {
        if(
          typeof front[i] == "string" &&
          typeof back[i] == "string"
          ){
          res.push({
            front: front[i],
            back: back[i],
            id: uuidv4()
          })
        }
      }

      addCards(res)
      setLoading(false)
    })
    .catch(function (error) {
      console.log(error);
      setLoading(false)
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
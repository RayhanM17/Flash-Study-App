import { useContext} from "react"
import CardContext from '../../context/CardsContext'

function SuggestionsList() {
  const {suggestionsData} = useContext(CardContext)

  return (
    <div>
      <h3 className="text-secondary mt-6"> Suggested Cards</h3>
      <ul className= "list-disc mt-5">
        {suggestionsData.map((item) => (
          <li key={item.id} className="ml-5">{item.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default SuggestionsList
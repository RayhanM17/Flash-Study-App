import FlashCardGenerator from "../components/cards/FlashCardGenerator"
import SuggestionsList from "../components/cards/SuggestionsList"
import CardCreator from "../components/cards/CardCreator"
import CardList from "../components/cards/CardList"

function Flash() {

  return (
    <>
      <FlashCardGenerator />
      <SuggestionsList />
      <CardCreator />
      <CardList />
    </>
  )
}

export default Flash
import FlashCardGenerator from "../components/cards/FlashCardGenerator"
import CardCreator from "../components/cards/CardCreator"
import CardList from "../components/cards/CardList"

function Flash() {

  return (
    <>
      <FlashCardGenerator />
      <CardCreator />
      <CardList />
    </>
  )
}

export default Flash
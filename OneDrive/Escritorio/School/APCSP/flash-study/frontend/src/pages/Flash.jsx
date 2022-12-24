import FlashCardGenerator from "../components/cards/FlashCardGenerator"
import { ToastContainer } from 'react-toastify';
import CardCreator from "../components/cards/CardCreator"
import CardList from "../components/cards/CardList"

function Flash() {

  return (
    <>
      <ToastContainer />
      <FlashCardGenerator />
      <CardCreator />
      <CardList />
    </>
  )
}

export default Flash
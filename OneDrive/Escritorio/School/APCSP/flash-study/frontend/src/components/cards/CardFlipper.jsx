import React from 'react'
import { useContext, useState, useEffect } from 'react'
import CardContext from '../../context/CardsContext'

function CardFlipper() {
  let num = 0

  const {cards} = useContext(CardContext);

  if(true) {
    return <></>
  }

  const toggleNext = () => {
    if (num + 1 <= cards.length - 1) {
      num += 1
    } else {
      num = 0
    }
  }

  return (
    <section className="flipper d-flex align-items-center justify-content-center h-100">
    <div>
      <div className="scene scene--card">
        <div className="flip-card bg-dark">
          <div className="card__face card__face--front">
            {cards[num].front}
          </div>
          <div className="card__face card__face--back">
            {cards[num].back}
          </div>
        </div>
      </div>

      <div>
        <button className='btn' id="previous-btn"> Previous</button>
        <button className='btn' id="next-btn" onClick={toggleNext}> Next</button>
      </div>
    </div>
  </section>
  )
}

export default CardFlipper
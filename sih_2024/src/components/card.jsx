import './card.css';
import React, { useState, useEffect } from 'react';

const initialCards = [
  { id: 1, type: 'description', text: 'The President of India', pairId: 101 },
  { id: 101, type: 'answer', text: 'Article 52', pairId: 1 },
  { id: 2, type: 'description', text: 'The election of the President', pairId: 102 },
  { id: 102, type: 'answer', text: 'Article 54', pairId: 2 },
  { id: 3, type: 'description', text: 'The Attorney-General for India', pairId: 103 },
  { id: 103, type: 'answer', text: 'Article 76', pairId: 3 },
  { id: 4, type: 'description', text: 'The Vice-President of India', pairId: 104 },
  { id: 104, type: 'answer', text: 'Article 63', pairId: 4 },
  { id: 5, type: 'description', text: 'The pardoning powers of the President ', pairId: 105 },
  { id: 105, type: 'answer', text: 'Article 72', pairId: 5 },

  
  // Add more card pairs here
];

function Card() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);

  useEffect(() => {
    // Shuffle the cards when the component is loaded
    setCards(shuffleArray([...initialCards]));
  }, []);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleFlip = (card) => {
    if (flippedCards.length < 2 && !flippedCards.includes(card) && !matchedPairs.includes(card.id)) {
      setFlippedCards([...flippedCards, card]);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;

      // Check if the flipped cards match by comparing pairId and id
      if (firstCard.pairId === secondCard.id || secondCard.pairId === firstCard.id) {
        // Always match in order of description first, answer second
        const orderedMatch = firstCard.type === 'description' ? [firstCard, secondCard] : [secondCard, firstCard];
        setMatchedPairs([...matchedPairs, orderedMatch[0].id, orderedMatch[1].id]);
      }

      // Flip back after a short delay if they don't match
      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  }, [flippedCards, matchedPairs]);

  const isFlipped = (card) => {
    return flippedCards.includes(card) || matchedPairs.includes(card.id);
  };

  return (
    <div className="card-game">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`card ${isFlipped(card) ? 'flipped' : ''}`}
          onClick={() => handleFlip(card)}
        >
          {isFlipped(card) ? card.text : 'Flip Me'}
        </div>
      ))}
    </div>
  );
}

export default Card;
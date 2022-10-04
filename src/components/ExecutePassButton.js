import React from 'react';
import Card from './Card';
import { useGame } from '../context/GameContext';

export default function ExecutePassButton({
  passCard,
  // setFrom,
  // from,
  // to,
  // selectedCard,
  // setSelectedCard,
}) {
  const { to, from, selectedCard } = useGame();
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} />
      {from} to {to}
    </div>
  );
}

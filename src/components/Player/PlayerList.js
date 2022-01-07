import React from 'react';
import { Link } from 'react-router-dom';

export default function PlayerList({ players }) {
  return (
    <div>
      <h1>Players</h1>
      <div>
        {players.map((players) => (
          <Link key={players.id} to={`/players/${players.id}`}>
            {players.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

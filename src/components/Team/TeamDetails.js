import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamDetails({ team }) {
  return (
    <div>
      {team.players.map((item) => (
        <div key={item.id}>
          <Link key={item.id} to={`/players/${item.id}`}>
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

import React from 'react';

export default function TeamDetails({ team }) {
  return (
    <div>
      {team.players.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

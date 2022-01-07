import React from 'react';

export default function PlayerDetails({ player }) {
  return (
    <div>
      <p>{player.name}</p>
      <p>Position: {player.position}</p>
      <p>Team ID: {player.team_id}</p>
    </div>
  );
}

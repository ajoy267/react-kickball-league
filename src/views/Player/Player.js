import React, { useEffect, useState } from 'react';
import { fetchPlayerById } from '../../services/players';
import PlayerDetails from '../../components/Player/PlayerDetails';

export default function Player(props) {
  const [player, setPlayer] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayerById(id);
      setPlayer(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      <PlayerDetails player={player} />
    </div>
  );
}

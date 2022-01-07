import React, { useEffect, useState } from 'react';
import { fetchTeamById } from '../../services/teams';
import TeamDetails from '../../components/Team/TeamDetails';

export default function Team(props) {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamById(id);
      setTeam(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      <p>{team.name}</p>
      <p>Location: {team.city}</p>
      <p>Players:</p>
      <TeamDetails team={team} />
    </div>
  );
}

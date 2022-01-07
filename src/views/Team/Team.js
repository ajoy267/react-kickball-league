import React, { useEffect, useState } from 'react';
import { fetchTeamById } from '../../services/teams';
import TeamDetails from '../../components/Team/TeamDetails';

export default function Team(props) {
  const [team, setTeam] = useState([]);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamById(id);
      setTeam(data);
    };
    fetchData();
  }, [id]);
  return (
    <div>
      <p>{team.name}</p>
      <p>{team.city}</p>
      <TeamDetails team={team} />
    </div>
  );
}

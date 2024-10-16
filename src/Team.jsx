import { useState } from "react";


const Team = () => {

    const [team, setTeam] = useState(11);

    const addTeam = () =>{
        const newTeam = team + 1 ;
        setTeam(newTeam)
    }

    const reduceTeam = () =>{
        const newTeam = team - 1 ;
        setTeam(newTeam)
    }
    return (
        <div>
            <h2>Players : {team} </h2>
            <button onClick={addTeam}>Add Team</button>
            <button onClick={reduceTeam}>Reduce Team</button>
        </div>
    );
};

export default Team;
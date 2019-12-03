import React, { useState, useEffect } from 'react';
import useFetchGet from "../utils/utils";


function RaceForm(props) {
    const [raceState, setRaceState] = useState([]);
    const [raceInfo, setRaceInfo] = useState({})
useEffect(() => {
        fetch("http://localhost:4000/races/all")
            .then(response => response.json())
            .then(data => setRaceState(data.raceResponse));
}, []);
    const getRaceInformation = (event) => {
        const index = event.target.value;
        if (index != "select") {
            fetch("http://localhost:4000/races/"+index)
            .then(response => response.json())
            .then(data => setRaceInfo(data));
        }
    }
    return (
        <div>
            {raceState.map((item, index) => (
                <div className="race-card">
                    <h1 key={index}>{item.name}</h1>

                </div>
            ))}
        </div>
    );

}

export default RaceForm; 
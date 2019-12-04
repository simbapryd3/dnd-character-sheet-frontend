import React, { useState, useEffect } from "react";

function RaceInfo(props) {
  const [state, setState] = useState([]);
  const urls = [
    "http://localhost:4000/races/1",
    "http://localhost:4000/races/2",
    "http://localhost:4000/races/3",
    "http://localhost:4000/races/4",
    "http://localhost:4000/races/5",
    "http://localhost:4000/races/6",
    "http://localhost:4000/races/7",
    "http://localhost:4000/races/8",
    "http://localhost:4000/races/9"
  ];
  useEffect(urls => {
    urls.forEach(item => {
      fetch(item)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setState(data);
        });
    });
  }, []);
  console.log(state);
  return <h1>Race Info</h1>;
}

export default RaceInfo;

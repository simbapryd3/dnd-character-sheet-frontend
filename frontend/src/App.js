import React, {useState, useEffect} from 'react';
import './styles/main.css';
import './App.css';
import Landing from './Components/Landing';



function Nav() {
  const [state, setState] = useState(<Landing/>)

  function handleSubmitClick (event) {
    const val = event.target.value;
    setState(stateDict[val])
  }

  const stateDict = {
    landing: <Landing/>
  }


  return (
    <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <button type="button"
                className="nav-button">
                Home
              </button>
            </li>
            <li className="nav-item">
              <button type="button"
                className="nav-button">
                About
              </button>
            </li>
            <li className="nav-item">
              <button type="button"
                className="nav-button">
                Find Character
              </button>
            </li>
          </ul>
    </nav>
  )
}


function App() {
  return (
    <div className="main-wrapper">
      <header className="main-header">
        <Nav/>
      </header>
      <div className="main-content">
        <Landing/>
      </div>
    </div>
  );
}

export default App;

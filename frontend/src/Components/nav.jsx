import React from "react";

function Nav(props) {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <button
            type="button"
            className="nav-button"
            value="Home button, son"
            onClick={props.onclick}>
            Home
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="nav-button"
            value="About burrito"
            onClick={props.onclick}>
            About
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="nav-button"
            value="Find Char burrito"
            onClick={props.onclick}>
            Find Character
          </button>
        </li>
      </ul>
      {props.children}
    </nav>
  );
}

export default Nav;

// class Navigation extends React.Component {
//     constructor(props) {
//         super(props);

//     }
//     render() {
//         return (
//             <nav role='navigation'>
//                 <ul>
//                     <li><a href="./index.html">Home</a></li>
//                     <li><a href="./user.html">UserForm</a></li>
//                     <li><a href="./character.html">CharacterForm</a></li>
//                     <li><a href="./stats.html">StatsForm</a></li>
//                     <li><a href="./final-character-output.html">Character Sheet</a></li>
//                 </ul>
//                 </nav>

//           );
//     }
// }

import React from "react";

function Nav(props) {
  return (
    <nav className="navbar">
      <div className="header">D&D&U <sub className="copyright">&copy;</sub></div>
      {/* <ul className="nav-header">
        <li className="nav-item">
          <button
            type="button"
            className="nav-button"
            value="next"
            onClick={props.onclick}
          >
            Next
          </button>
        </li>
      </ul>
      {props.children} */}
    </nav>
  );
}

export default Nav;

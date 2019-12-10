import React, { useState, useEffect } from "react";

function UserForm(props) {
  return (
    <form className="userForm">
      <h1>Sign Up!</h1>
      <label>
        <h3>
          Enter your username: &nbsp;
          <input
            type="text"
            onChange={props.onchange}
            name="username"
            input
            size="60"
          />
        </h3>
        <br></br>
        <h3>
          Enter your email: &nbsp;
          <br></br>
          <input
            type="text"
            onChange={props.onchange}
            name="email"
            input
            size="60"
          />
        </h3>

        <h3>
          Subscribe to our newsletter? &nbsp;
          <input
            id="checkbox"
            type="checkbox"
            onChange={props.onchange}
            name="subscribe"
          />
        </h3>
        <br></br>
        <button
          className="generic_button"
          type="submit"
          value="3"
          name="back"
          onClick={props.onclick}>
          Continue
        </button>
      </label>
    </form>
  );
}

export default UserForm;

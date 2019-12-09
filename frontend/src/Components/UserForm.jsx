import React, { useState, useEffect } from "react";

function UserForm(props) {
  return (
    <form className="userForm">
      <label>
        <h3>Enter your username: &nbsp;</h3>
        <input type="text" onChange={props.onchange} name="username" input size="60" />
        <span>
          <h3>Enter your email: &nbsp;</h3>
          <input type="text" onChange={props.onchange} name="email" input size="60" />
        </span>
        <span>
          <h3>Subscribe to our newsletter? &nbsp;
          <input type="checkbox" onChange={props.onchange} name="subscribe" /></h3>
        </span>
        <span>
          <br></br>
          <button type="submit" value="3" name="back" onClick={props.onclick}>
            Continue
          </button>
        </span>
      </label>
    </form>
  );
}

export default UserForm;

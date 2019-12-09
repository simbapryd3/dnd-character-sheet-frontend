import React, { useState, useEffect } from "react";

function UserForm(props) {
  return (
    <form className="userForm">
      <label>
        Enter your username: &nbsp;
        <input type="text" onChange={props.onchange} name="username" />
      </label>
      <br>
      </br>
      <br>
      </br>
      <label>
        Enter your email: &nbsp;
        <input type="text" onChange={props.onchange} name="email" />
      </label>
      <br>
      </br>
      <br>
      </br>
      <label>
        Subscribe to our newsletter? &nbsp;
        <input type="checkbox" onChange={props.onchange} name="subscribe" />
      </label>
      <br>
      </br>
      <br>
      </br>
      <button type="submit" value="3" name="back" onClick={props.onclick}>
        Continue
      </button>
    </form>
  );
}

export default UserForm;

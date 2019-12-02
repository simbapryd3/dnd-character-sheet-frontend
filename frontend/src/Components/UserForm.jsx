import React, { useState, useEffect } from "react";

function UserForm(props) {
  return (
    <form className="userForm">
      <label>
        Enter your username:
        <input type="text" onChange={props.onchange} name="username" />
      </label>
      <label>
        Enter your email:
        <input type="text" onChange={props.onchange} name="email" />
      </label>
      <label>
        Subscribe to our newsletter?
        <input type="checkbox" onChange={props.onchange} name="subscribe" />
      </label>
      <button type="submit" value="1" name="back" onClick={props.onclick}>
        Back
      </button>
    </form>
  );
}

export default UserForm;

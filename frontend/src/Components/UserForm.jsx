import React, { useState, useEffect } from "react";

function UserForm(props) {
  return (
    <div className="main_userform">
      <form className="userForm">
        <h1 className="userform_title">Sign Up!</h1>
        <label className="userform_form_card">
          <h3>
            Enter your character name: &nbsp;
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
            <input
              type="text"
              onChange={props.onchange}
              name="email"
              input
              size="60"
            />
          </h3>
          <br></br>
          <section className="userform_subscribe">
            <h3>
              Subscribe to future newsletters?{" "}
              <input
                type="checkbox"
                onChange={props.onchange}
                name="subscribe"
                className="subscribe_checkbox"
              />
            </h3>
          </section>
          <button
            className="userform_button"
            type="submit"
            value="3"
            name="back"
            onClick={props.onclick}
          >
            Continue
          </button>
        </label>
      </form>
    </div>
  );
}

export default UserForm;

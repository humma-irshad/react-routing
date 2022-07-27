import { useState } from "react";
import { post1 } from "../lib/api";
import classes from "./SignUp.module.css";

const SignUp = () => {
  const [enteredUsername, setUsername] = useState("");
  const [enteredEmail, setEmail] = useState("");
  const [enteredPassword, setPassword] = useState("");

  const setUsernameHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setUsername(event.target.value);
    }
  };

  const setEmailHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setEmail(event.target.value);
    }
  };

  const setPasswordHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setPassword(event.target.value);
    }
  };
  const submitForm = async (event) => {
    event.preventDefault();
    await post1(
      "https://api-scripture-iust-dev.herokuapp.com/v1/scripture/user/new",
      {
        username: enteredUsername,
        email: enteredEmail,
        password: enteredPassword,
        roles: "user",
      }
    ).then(() => console.log(enteredEmail + " " + enteredPassword));
  };

  return (
    <div className={classes.signup}>
      <h1>Sign Up</h1>
      <div className={classes["signup-content"]}>
        <form className={classes["signup-form"]} onSubmit={submitForm}>
          <input
            id="username"
            placeholder="USERNAME"
            type="text"
            value={enteredUsername}
            onChange={setUsernameHandler}
          />
          <input
            id="email"
            placeholder="EMAIL"
            type="email"
            value={enteredEmail}
            onChange={setEmailHandler}
          />
          <input
            id="password"
            placeholder="PASSWORD"
            type="password"
            value={enteredPassword}
            onChange={setPasswordHandler}
          />
          <button  type="submit">SIGN UP</button>
        </form>
      </div>
    </div>
  );
};
export default SignUp;

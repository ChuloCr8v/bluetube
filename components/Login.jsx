import styles from "../styles/Login.module.scss";
import Button from "./Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../pages/redux/userSlice";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    props.setShowRegisterForm(!props.showRegisterForm);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginStart());
      const res = await axios.put("http://localhost:8000/api/auth/signin", {
        username,
        password,
      });
      dispatch(loginSuccess(res.data));
    } catch (error) {
      dispatch(loginFailure());
      console.log(error);
    }
  };

  return (
    <div className={props.showRegisterForm ? styles.hide_login : styles.login}>
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <div className={styles.form_group}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button text="Submit" className={styles.btn} onClick={handleLogin}>
            Login
          </button>
          <button className={styles.btn} onClick={handleClick}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

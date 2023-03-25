import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Styles from "./styles/login.module.css";
import string from "yup";


// import Img from '../photo/athletic-themed-adidas-poster-o03o9tfe9qdsedn1.jpg'

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/home", { state: { id: email } });
          } else if (res.data === "not exist") {
            alert("user have not sign Up");
          }
        })
        .catch((e) => {
          alert("wrong details..check password or user id");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className={Styles.body}>
      <div className={Styles.card}>
        <h1>Login</h1>
        <form action="POST">
          <input
            type="text"
            className={Styles.input}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            required
          />
          <input
            type="password"
            className={Styles.input}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <input type="submit" className={Styles.button} onClick={submit} />
        </form>
      

        <Link to="/signup" className={Styles.signup}>
          Signup
        </Link>
      </div>
    </div>
  );
}

export default Login;

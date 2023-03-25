import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Styles from "./styles/signup.module.css";
import google from '../icons/icons8-google.svg'
import google1 from '../icons/google.svg'
import { LoginSocialGoogle } from 'reactjs-social-login';

function Signup() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8000/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("user already exist");
          } else if (res.data === "not exist") {
            history("/", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className={Styles.body}>
      <div className={Styles.card}>
        <h1>Signup</h1>
        <form action="POST">
          <input
            type="text"
            className={Styles.input}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
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
        <div id={Styles.google}>
{/* <img src={google}/> */}
  <LoginSocialGoogle
        client_id={"808763024264-hmqkgr8ku8skt7emcdqqkb2qh0lqg9u1.apps.googleusercontent.com"}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }) => {
          console.log(provider, data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
      <img src={google1}/>
      </LoginSocialGoogle>
        </div>

        <Link to="/" className={Styles.login}>
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;

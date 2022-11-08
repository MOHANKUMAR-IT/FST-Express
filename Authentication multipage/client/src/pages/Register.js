import React, {useState} from "react";
import Axios from "axios";
import "../styles/App.css"
import { Link } from 'react-router-dom';
// import Home from "../pages/Home"
// import Register from "../pages/Login"

function Register({user = false}) {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  Axios.defaults.withCredentials = true;

  const register = () => {
    // Axios.post(url,)
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <input
          type="text" placeholder="username"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        /><br></br>
        <br></br>
        <input
          type="text" placeholder="Password..."
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        /><br></br>
        <br></br>
        <button onClick={register}> Register </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{!user && <Link to="/Login">Login</Link>}

      </div>
    </div>
  );
}

export default Register;


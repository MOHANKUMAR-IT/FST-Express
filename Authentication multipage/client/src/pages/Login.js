import React, {useState} from "react";
import Axios from "axios";
import "../styles/App.css"
import { Link } from 'react-router-dom';

function Login({user=false}) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
      const userName = response.data;
      if (userName[0]) {
        localStorage.setItem('@user', userName[0].username);
        window.location.reload();
      } else {
        alert(response.data.message);
      }
    });
  };

  return (
    <div className="App">
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        /><br></br>
        <br></br>
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        /><br></br>
        <br></br>
        <button onClick={login}> Login </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {!user && <Link to="/Register">Register</Link>}
      </div>
    </div>
  );
}

export default Login;


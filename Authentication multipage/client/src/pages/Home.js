import React, {useState} from "react";

function Home() {
  const userName = localStorage.getItem('@user');
  const logout = () => {
    localStorage.removeItem('@user');
    window.location.reload();
  }
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <div style={{textAlign:"center"}}>
          <h1>Welcome {userName}</h1>
      </div>
      <div style={{textAlign:"right"}}>
        <button onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;


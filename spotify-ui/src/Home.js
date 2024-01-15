import "./App.css";
import { useEffect, useState } from "react";
import axios from 'axios';

function Home() {
  const [token, setToken] = useState("");
    const [profile, setProfile] = useState(null);

  useEffect(() => {
    let token = window.localStorage.getItem("token");
    setToken(token);
  }, []);

  const getCurrentUser = () => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    
    axios.get('http://localhost:8000/current-user-profile', config)
      .then(response => {
        setProfile(response.body);
      })
      .catch(error => {
        console.error(error);
      });
  };
  return <>Home
  <div>
    <button onClick={getCurrentUser}>Get User</button>
    {profile}</div></>;
}

export default Home;

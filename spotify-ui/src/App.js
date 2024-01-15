import "./App.css";
import { useEffect, useState } from "react";
import Login from "./Login";
import Home from "./Home";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    let token = window.localStorage.getItem("token");

    setToken(token);
  }, []);

  return (
    <div className="App">
            <header className="App-header">
                {!token ?
                    <Login/>
                    : <Home/>}
            </header>
        </div>
  );
}

export default App;

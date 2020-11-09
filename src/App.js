import "./App.css";
import Pokemon from "./Pokemon";
import React, { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="main-div" style={{ textAlign: "center" }}>
      <button style={{ color: "blue" }} onClick={() => setShow(!show)}>
        Show Pokemons
      </button>
      {show && <Pokemon />}
    </div>
  );
  // useEffect(() => {
  //   fetchPokemons();
  // }, []);
  // return <div></div>;
}

export default App;

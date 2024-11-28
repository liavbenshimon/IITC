import { useState } from "react";
import "./App.css";
// Import components
import PokDetails from "./Components/PockedDetail/Pokedetail.jsx";
import Header from "./Components/Header/Header.jsx";
import Main from "./Components/Main/Main.jsx";

function App() {
  const [clickedPok, setClickedPok] = useState(null);
  return (
    <div className="App">
      <>
        <Header />
        <Main setClickedPok={setClickedPok} />
      </>
      {<PokDetails clickedPok={clickedPok} setClickedPok={setClickedPok} />}
    </div>
  );
}

export default App;

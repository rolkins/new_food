import React from "react"
import Header from "./components/HelloBlock/Header/Header";
import Intro from "./components/HelloBlock/Intro/Intro";
import Catalog from "./components/Catalog/Catalog";

function App() {
  return (
    <div className="App">
     <Intro />
     <Catalog />
    </div>
  );
}

export default App;

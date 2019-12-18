import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";
import Simulator from "./components/simulator";


function App() {
  return (
    <div className="App">
      <Header />
      <Simulator />
      <Footer />
    </div>
  );
}

export default App;

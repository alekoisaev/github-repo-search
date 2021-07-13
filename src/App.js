import React from "react";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import "./App.scss";

// https://api.github.com/search/repositories?q=

function App() {
  return (
    <div className="App" style={{ backgroundImage: "./git-logo.svg" }}>
      <SearchBar />
      <Footer />
    </div>
  );
}

export default App;

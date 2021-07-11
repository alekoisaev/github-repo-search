import React, { useState, useEffect, useCallback } from "react";
import SearchBar from "./components/SearchBar";

// https://api.github.com/search/repositories?q=

function App() {
  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;

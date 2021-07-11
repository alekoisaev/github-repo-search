import React, { useState, useCallback } from "react";
import DebounceSearch from "./DebounceSearch";
import SearchResult from "./SearchResult";

function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [searchButton, setSearchButton] = useState(false);
  const [repos, setRepos] = useState([]);

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    fetch("https://api.github.com/search/repositories?q=" + e.target.value)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setRepos(data.items);
      });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const optimizedVersion = useCallback(debounce(handleChange), []);

  const handleClick = (e) => {
    if (!inputValue) {
      alert("Enter Repo name, Please !");
    } else {
      setSearchButton(true);
    }
  };

  if (!searchButton) {
    return (
      <div>
        <input
          type="text"
          placeholder="Search Github Repositories"
          onChange={optimizedVersion}
        />
        <button onClick={handleClick}>Search</button>
        {inputValue ? <DebounceSearch repos={repos} /> : <div></div>}
      </div>
    );
  } else {
    return <SearchResult repos={repos} />;
  }
}

export default SearchBar;

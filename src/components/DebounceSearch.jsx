import React from "react";

function DebounceSearch({ repos }) {
  return (
    <div>
      <ul
        className="dropdown-menu"
        style={{ maxHeight: "200px", overflowY: "auto", display: "block" }}
      >
        {repos.map((repo) => {
          return (
            <li key={repo.id}>
              <a
                className="dropdown-item"
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
              >
                {repo.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DebounceSearch;

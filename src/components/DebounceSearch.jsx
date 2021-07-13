import React from "react";

function DebounceSearch({ repos }) {
  return (
    <div className="dropdown-menu">
      <ul className="dropdown-list">
        {repos.map((repo) => {
          return (
            <p key={repo.id}>
              <a
                className="dropdown-item"
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
              >
                {repo.name}
              </a>
            </p>
          );
        })}
      </ul>
    </div>
  );
}

export default DebounceSearch;

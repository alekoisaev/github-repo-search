import React from "react";
import RepoCard from "./RepoCard";

function SearchResult({ repos }) {
  return (
    <div className="search-result">
      <button
        onClick={() => window.location.reload(false)}
        className="search-another-btn"
      >
        Back
      </button>
      {repos.map((repo) => {
        return (
          <div>
            <RepoCard
              key={repo.id}
              name={repo.name}
              owner={repo.owner.login}
              url_repo={repo.html_url}
              owner_url={repo.owner.html_url}
              avatar={repo.owner.avatar_url}
              create_data={repo.created_at}
            />
          </div>
        );
      })}
    </div>
  );
}

export default SearchResult;

// name, owner, avatar, url_repo, owner_url, create_data

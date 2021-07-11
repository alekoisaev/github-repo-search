import React from "react";
import RepoCard from "./RepoCard";

function SearchResult({ repos }) {
  return (
    <div>
      <button onClick={() => window.location.reload(false)}>
        Search another Repo
      </button>
      {repos.map((repo) => {
        return (
          <RepoCard
            key={repo.id}
            name={repo.name}
            owner={repo.owner.login}
            url_repo={repo.html_url}
            url_owner={repo.owner.html_url}
            avatar={repo.owner.avatar_url}
            create_data={repo.created_at}
          />
        );
      })}
    </div>
  );
}

export default SearchResult;

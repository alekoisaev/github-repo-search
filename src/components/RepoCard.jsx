function RepoCard({ name, owner, url_repo, url_owner, avatar, create_data }) {
  return (
    <div className="card mb-4" style={{ maxWidth: "450px" }}>
      <div className="row g-1">
        <div className="col-md-2">
          <img
            src={avatar}
            className="img-fluid rounded-start"
            alt="Owner avatar"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              Repo Name: <a href={url_repo}>{name}</a>
            </h5>
            <p className="card-text">
              Owner : <a href={url_owner}>{owner}</a>
            </p>
            <p className="card-text">
              <small className="text-muted">Created: {create_data}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepoCard;

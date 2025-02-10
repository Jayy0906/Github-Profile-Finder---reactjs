const User = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    login,
    created_at,
    bio,
    company,
    location,
  } = user;

  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <div className="card my-4 text-center">
          <img
            src={avatar_url}
            className="card-img-top mx-auto mt-3"
            alt={login}
            style={{ width: "120px", borderRadius: "50%" }}
          />
          <div className="card-body">
            <h5 className="card-title">
              {location ? `📍 ${location}` : "Location: N/A"}
            </h5>
            <p className="card-text">{bio || "No bio available"}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Joined: {new Date(created_at).toLocaleDateString()}
            </li>
            <li className="list-group-item">Repos: {public_repos}</li>
            <li className="list-group-item">Followers: {followers}</li>
            <li className="list-group-item">Following: {following}</li>
          </ul>
          <div className="card-body">
            <a
              href={`https://github.com/${login}`}
              className="btn btn-dark btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile
            </a>
            {company && <p className="mt-2">🏢 {company}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

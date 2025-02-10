import { useEffect, useState } from "react";
import User from "./User";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const GithubProfileFind = () => {
  const [userName, setUserName] = useState("jayy0906");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchGithubUserData = async () => {
    if (!userName.trim()) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      if (!res.ok) throw new Error("User not found!");

      const data = await res.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <input
            type="text"
            className="form-control my-3"
            placeholder="Search Github Username..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button
            className="btn btn-primary w-50"
            onClick={fetchGithubUserData}
            disabled={!userName.trim()}
          >
            {loading ? "Searching..." : "Search"}
          </button>

          {error && <p className="text-danger mt-2">{error}</p>}
        </div>
      </div>

      {userData && <User user={userData} />}
    </div>
  );
};

export default GithubProfileFind;

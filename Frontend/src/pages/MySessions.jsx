import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchWithToken } from "../services/fetchWithToken";

const MySessions = () => {
  const [sessions, setSessions] = useState([]);
  const [error, setError] = useState("");
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const getMySessions = async () => {
      try {
        const data = await fetchWithToken(
          "/api/my-sessions",
          "GET",
          null,
          token
        );
        setSessions(data);
      } catch (err) {
        setError(err.message);
      }
    };

    getMySessions();
  }, [token]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">My Sessions</h2>
      {error && <p className="text-red-500">{error}</p>}
      {sessions.length === 0 ? (
        <p>You have no sessions yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sessions.map((session) => (
            <div
              key={session._id}
              className="border rounded p-4 shadow hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">{session.title}</h3>
                <span
                  className={`text-sm px-2 py-1 rounded ${
                    session.status === "published"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {session.status}
                </span>
              </div>
              <p className="text-sm mt-1">
                Tags: {session.tags.length > 0 ? session.tags.join(", ") : "—"}
              </p>
              <p className="text-sm text-gray-500">
                Last Updated: {new Date(session.updated_at).toLocaleString()}
              </p>
              <div className="mt-3 flex justify-between items-center">
                <a
                  href={session.json_file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-sm underline"
                >
                  View File
                </a>
                <Link
                  to={`/editor/${session._id}`}
                  className="bg-indigo-600 text-white text-sm px-3 py-1 rounded hover:bg-indigo-700"
                >
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MySessions;

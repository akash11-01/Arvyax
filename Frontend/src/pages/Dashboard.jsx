import { useEffect, useState } from "react";

const Dashboard = () => {
  const [sessions, setSessions] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getSessions = async () => {
      try {
        const res = await fetch("/api/sessions");
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        setSessions(data);
      } catch (err) {
        setError(err.message);
      }
    };

    getSessions();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Public Wellness Sessions</h2>
      {error && <p className="text-red-500">{error}</p>}
      {sessions.length === 0 ? (
        <p>No sessions found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sessions.map((session) => (
            <div key={session._id} className="p-4 border rounded shadow">
              <h3 className="font-bold text-lg">{session.title}</h3>
              <p className="text-sm text-gray-500">
                By: {session.user_id?.email || "Anonymous"}
              </p>
              <p className="mt-2">
                <span className="font-semibold">Tags:</span>{" "}
                {session.tags.join(", ")}
              </p>
              <a
                href={session.json_file_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mt-2 inline-block"
              >
                View JSON File
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;

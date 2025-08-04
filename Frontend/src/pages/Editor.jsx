import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchWithToken } from "../services/fetchWithToken";

const Editor = () => {
  const { id } = useParams();
  const token = useSelector((state) => state.auth.token);
  const [form, setForm] = useState({ title: "", tags: "", json_file_url: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  // Load session if editing
  useEffect(() => {
    if (!id) return;
    const fetchSession = async () => {
      try {
        const data = await fetchWithToken(
          `/api/my-sessions/${id}`,
          "GET",
          null,
          token
        );
        setForm({
          title: data.title,
          tags: data.tags.join(", "),
          json_file_url: data.json_file_url,
        });
      } catch (err) {
        setError(err.message);
      }
    };
    fetchSession();
  }, [id, token]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    // Auto-save debounce
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      saveDraft(true);
      setError("");
      setMessage("Draft auto-saved!");
    }, 5000);
  };

  const saveDraft = async (autosave = false) => {
    try {
      const payload = { ...form, id }; // pass ID if editing
      const res = await fetchWithToken(
        "/api/my-sessions/save-draft",
        "POST",
        payload,
        token
      );
      if (!id) {
        navigate(`/editor/${res._id}`); // redirect to /editor/:id after first save
      }
      if (!autosave) {
        setMessage("Draft saved successfully!");
        setTimeout(() => setMessage(""), 3000);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const publishSession = async () => {
    try {
      const res = await fetchWithToken(
        "/api/my-sessions/publish",
        "POST",
        { id },
        token
      );
      setMessage("Session published!");
      setTimeout(() => navigate("/my-sessions"), 1500);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">
        {id ? "Edit Session" : "New Session"}
      </h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {message && <p className="text-green-600 mb-2">{message}</p>}

      <div className="space-y-4">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Session Title"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="tags"
          value={form.tags}
          onChange={handleChange}
          placeholder="Tags (comma separated)"
          className="w-full border p-2 rounded"
        />
        <input
          name="json_file_url"
          value={form.json_file_url}
          onChange={handleChange}
          placeholder="JSON File URL"
          className="w-full border p-2 rounded"
          required
        />

        <div className="flex space-x-4">
          <button
            onClick={() => saveDraft(false)}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Save as Draft
          </button>
          <button
            onClick={publishSession}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editor;

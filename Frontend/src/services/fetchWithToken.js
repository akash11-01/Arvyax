const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

export const fetchWithToken = async (
  url,
  method = "GET",
  body = null,
  token
) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...(body && { body: JSON.stringify(body) }),
  };

  const res = await fetch(`${API_BASE}${url}`, options);
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Something went wrong");
  return data;
};

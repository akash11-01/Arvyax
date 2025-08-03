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

  const res = await fetch(url, options);
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Something went wrong");
  return data;
};

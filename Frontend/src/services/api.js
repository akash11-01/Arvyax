export const registerUser = async (formData) => {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data;
};

export const loginUser = async (formData) => {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data;
};

const URL = "http://localhost:5500/login";
// const URL = '/login';

export async function apiLogin({ username, password }) {
  const config = {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };

  const res = await fetch(URL, config);
  return res.json();
}

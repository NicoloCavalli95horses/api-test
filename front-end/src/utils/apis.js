
const BASE_URL = getBaseBASE_URL();

export async function apiLogin({ username, password }) {
  const config = {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };

  const EP = BASE_URL + '/login';
  console.log(EP);
  const res = await fetch(EP, config);
  return res.json();
}


function getBaseBASE_URL() {
  const is_local = window.location.hostname == 'localhost';
  return is_local ? 'http://localhost:5500' : '/';
}
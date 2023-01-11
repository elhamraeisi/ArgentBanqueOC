const BASE_URL = "http://localhost:3001/api/v1/user/";

export function getProfile(token) {
  return fetch(BASE_URL + "profile", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
  }).then((res) => res.json());
}

export function signIn(email, password) {
  const body = {
    email: email,
    password: password,
  };
  return fetch(BASE_URL + "login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
}

export function editName(newFirstName, newLastName, token) {
  const body = {
    firstName: newFirstName,
    lastName: newLastName,
  };
  return fetch(BASE_URL + "profile", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
}

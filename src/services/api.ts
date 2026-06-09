const BASE_URL = "http://localhost:3002";

export const fetchAnimals = async () => {
  const res = await fetch(`${BASE_URL}/animals`);
  return res.json();
};

export const fetchAnimalById = async (id: string) => {
  const res = await fetch(`${BASE_URL}/animals/${id}`);
  return res.json();
};

// REGISTER USER
export const registerUser = async (user: any) => {
  const res = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  return res.json();
};

// LOGIN USER
export const loginUser = async (email: string, password: string) => {
  const res = await fetch(
    `${BASE_URL}/users?email=${email}&password=${password}`
  );

  return res.json();
};
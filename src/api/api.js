const BASE_URL = 'http://localhost:5000';

export async function getCourses() {
  const res = await fetch(`${BASE_URL}/courses`);
  return res.json();
}

export async function createCourse(course) {
  const res = await fetch(`${BASE_URL}/courses`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(course),
  });
  return res.json();
}

export async function getUsers() {
  const res = await fetch(`${BASE_URL}/users`);
  return res.json();
}

export async function createUser(user) {
  const res = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return res.json();
}

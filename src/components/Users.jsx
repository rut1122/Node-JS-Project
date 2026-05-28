import { useEffect, useState } from 'react';
import { getUsers, getCourses, createUser } from '../api/api';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [courseId, setCourseId] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setUsers(await getUsers());
    setCourses(await getCourses());
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await createUser({ name, email, course: courseId });
    setName('');
    setEmail('');
    setCourseId('');
    loadData();
  }

  return (
    <div>
      <h2>Users</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="User name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <select
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
        >
          <option value="">Select course</option>
          {courses.map((course) => (
            <option key={course._id} value={course._id}>
              {course.name}
            </option>
          ))}
        </select>

        <button>Add User</button>
      </form>

      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} – {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

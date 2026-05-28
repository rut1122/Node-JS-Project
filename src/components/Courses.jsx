import { useEffect, useState } from 'react';
import { getCourses, createCourse } from '../api/api';

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    loadCourses();
  }, []);

  async function loadCourses() {
    const data = await getCourses();
    setCourses(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await createCourse({ name, description });
    setName('');
    setDescription('');
    loadCourses();
  }

  return (
    <div>
      <h2>Courses</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Course name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add Course</button>
      </form>

      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            {course.name} – {course.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

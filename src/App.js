import Courses from './components/Courses';
import Users from './components/Users';

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Course Manager</h1>
      <Courses />
      <hr />
      <Users />
    </div>
  );
}

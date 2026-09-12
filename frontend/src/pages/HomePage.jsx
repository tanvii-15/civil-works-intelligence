import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Civic Issue Tracker</h1>
      <p>Welcome to the Civic Issue Tracker.</p>

      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
    </div>
  );
}

export default HomePage;

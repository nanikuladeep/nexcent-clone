import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">
        🐾 Animal App
      </Link>

      <div className="ms-auto d-flex align-items-center">
        {user ? (
          <>
            <span className="text-white me-3">Welcome, {user.name}</span>
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-primary me-2">
              Login
            </Link>
            <Link to="/register" className="btn btn-success">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
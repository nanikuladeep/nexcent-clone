import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      {/* Logo / Title */}
      <Link className="navbar-brand" to="/">
        🐾 Animal App
      </Link>

      <div className="ms-auto d-flex align-items-center">
        {/* If user is logged in */}
        {user ? (
          <>
            <span className="text-white me-3">
              Welcome, {user.name}
            </span>

            <Link to="/animals" className="btn btn-success me-2">
              Animals
            </Link>

            <button
              className="btn btn-danger"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {/* If user is NOT logged in */}
            <Link to="/login" className="btn btn-primary me-2">
              Login
            </Link>

            <Link to="/register" className="btn btn-warning">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

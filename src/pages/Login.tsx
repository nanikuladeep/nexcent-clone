import { useState } from "react";
import { loginUser } from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const users = await loginUser(email, password);

    console.log("Users found:", users);

    if (users.length > 0) {
      login(users[0]);
      alert("Login Successful");
      navigate("/animals");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-page-wrap">
      <div className="login-layout-shell">
        <h1 className="login-page-title">Welcome to Zoo</h1>

        <div className="login-split-grid">
          <div className="login-card">
            <h2 className="mb-4">Login</h2>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-3">
              Login
            </button>
          </form>

          <p className="text-center mb-0">
            Don't have an account?{" "}
            <Link to="/register" className="btn btn-link p-0">
              Register here
            </Link>
          </p>
          </div>

          <div className="login-card empty-login-card" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};

export default Login;
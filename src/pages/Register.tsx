import { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    accountType: "user",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await registerUser(form);
    alert("Registration Successful");
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <h2 className="mb-4">Register</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
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
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Account Type</label>
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="accountType"
                  id="userAccount"
                  value="user"
                  checked={form.accountType === "user"}
                  onChange={(e) =>
                    setForm({ ...form, accountType: e.target.value })
                  }
                />
                <label className="form-check-label" htmlFor="userAccount">
                  User
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="accountType"
                  id="adminAccount"
                  value="admin"
                  checked={form.accountType === "admin"}
                  onChange={(e) =>
                    setForm({ ...form, accountType: e.target.value })
                  }
                />
                <label className="form-check-label" htmlFor="adminAccount">
                  Admin
                </label>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-success w-100 mb-3">
            Register
          </button>
        </form>

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="btn btn-link p-0">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
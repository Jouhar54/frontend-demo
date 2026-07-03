import { useState } from "react";
import {
  ArrowRight,
  LockKeyhole,
  Mail,
  User,
  Loader2,
} from "lucide-react";
import { Link, useNavigate } from "react-router";
import { authService } from "../../services/authService";
import "./signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  console.log(name)

  const handleSubmit = async (eve) => {
    eve.preventDefault(); 

    try {
      await authService.signup(name, email, password);
      // Redirect to login or home after successful signup
      // navigate("/login");
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <main className="signup-shell">
      <section className="signup-card">
        <div className="form-header">
          <h2>Create Account</h2>
          <p className="form-subtitle">Join us to start managing your workspace</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form className="signup-form" onSubmit={handleSubmit}>
          
          <label className="field">
            <span>Full Name</span>
            <div className="input-shell">
              <User size={18} />
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(eve) => setName(eve.target.value)}
                required
              />
            </div>
          </label>

          <label className="field">
            <span>Email Address</span>
            <div className="input-shell">
              <Mail size={18} />
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </label>

          <label className="field">
            <span>Password</span>
            <div className="input-shell">
              <LockKeyhole size={18} />
              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </label>

          <button type="submit" className="submit-button" >
            <>
              Sign Up
              <ArrowRight size={18} />
            </>
          </button>
        </form>

        <p className="login-copy">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </section>
    </main>
  );
}

export default Signup;

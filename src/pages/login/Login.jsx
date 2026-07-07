import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  LockKeyhole,
  Mail,
  Sparkles,
  Loader2,
} from "lucide-react";
import { authService } from "../../services/authService";
import { Link, useNavigate } from "react-router";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const result = await authService.login(email, password);
      console.log("Login successful:", result);
      
      // Save the token to local storage
      if (result && result.token) {
        localStorage.setItem("token", result.token);
      } else if (typeof result === 'string') {
        // Just in case the backend returns the token directly as a string
        localStorage.setItem("token", result);
      }
      
      alert("Login successful!");
    } catch (err) {
      setError(err.message || "An error occurred during login.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="login-shell">
      <section className="login-layout">
        <aside className="brand-panel">
          <div className="brand-badge">
            <Sparkles size={16} />
            Visionary Workspace
          </div>

          <div className="brand-copy">
            <p className="eyebrow">Design-led access</p>
            <h1>Step into a brighter way to manage your product universe.</h1>
            <p className="brand-description">
              Bring your team, tasks, and timelines into one cinematic dashboard
              built for fast-moving digital teams.
            </p>
          </div>

          <div className="brand-visual" aria-hidden="true">
            <div className="visual-card visual-main">
              <span className="visual-pill">Live Campaign</span>
              <strong>Creative launch synced</strong>
              <p>Motion assets, insights, and approvals aligned in real time.</p>
            </div>
            <div className="visual-card visual-float">
              <CheckCircle2 size={18} />
              <span>24 teams onboarded this week</span>
            </div>
            <div className="visual-grid">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </aside>

        <section className="form-panel">
          <div className="glass-card">
            <div className="form-header">
              <p className="eyebrow">Welcome back</p>
              <h2>Sign in to continue</h2>
              <p className="form-subtitle">
                Access your dashboard, campaigns, and collaboration spaces from
                one secure portal.
              </p>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
              {error && <p className="error-message">{error}</p>}
              
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
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </label>

              <div className="form-row">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Keep me signed in</span>
                </label>
                <a href="/">Forgot password?</a>
              </div>

              <button type="submit" className="submit-button" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Signing In...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            <p className="signup-copy">
              New here? <Link to="/signup">Create an account</Link>
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Login;

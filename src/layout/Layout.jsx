import { Link, Outlet } from "react-router";
import "./layout.css";

function Layout() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div>
          <p className="kicker">Sample App</p>
          <h2 className="title">Dashboard</h2>
        </div>

        <nav className="nav">
          <Link to="/home" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/counter" className="nav-link">
            Counter
          </Link>
        </nav>
      </aside>

      <div className="content-area">
        <header className="header">
          <h1 className="header-title">Welcome</h1>
        </header>

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;

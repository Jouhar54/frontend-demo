import { NavLink, Outlet } from "react-router";
import "./layout.css";

function Layout() {
  return (
    <div className="app-shell">
      <nav className="navbar">
        <div className="nav-container">
          <div className="brand">
            <p className="kicker">Sample App</p>
            <h2 className="title">Dashboard</h2>
          </div>

          <div className="nav-links">
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/counter" className="nav-link">
              Counter
            </NavLink>
          </div>
          
          <div className="nav-actions">
            <div className="user-profile">
              <div className="avatar">JD</div>
              <span className="username">John Doe</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="content-area">

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;

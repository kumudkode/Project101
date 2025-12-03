import { Outlet, Link } from "react-router-dom"
import "./Layout.css"

function Layout() {
  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-container">
          <div className="brand">
            MediCare Pro
          </div>
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">Dashboard</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">Patient Records</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">Appointments</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="main-content">
        <div className="content-container">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Layout
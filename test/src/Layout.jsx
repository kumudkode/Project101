import { Outlet, Link } from "react-router-dom"
import "./Layout.css"

function Layout() {
  return (
    <div className="layout">
      <nav className="navbar">
        <div className="brand">
          MyApp
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
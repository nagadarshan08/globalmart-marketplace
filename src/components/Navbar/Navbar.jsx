import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Globe2,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSectionClick = (sectionId) => {
    setMenuOpen(false);

    // If already on homepage, scroll directly
    if (window.location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      // Go to homepage first
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => setMenuOpen(false)}
        >
          <div className="logo-icon">
            <Globe2 size={22} />
          </div>

          <span>GlobalMart</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="navbar-links">

          <button
            type="button"
            className="navbar-link-button"
            onClick={() => handleSectionClick("explore")}
          >
            Explore
          </button>

          <button
            type="button"
            className="navbar-link-button"
            onClick={() => handleSectionClick("how-it-works")}
          >
            How It Works
          </button>

          <button
            type="button"
            className="navbar-link-button"
            onClick={() => handleSectionClick("roles")}
          >
            For Business
          </button>

          <button
            type="button"
            className="navbar-link-button"
            onClick={() => handleSectionClick("about")}
          >
            About
          </button>

        </div>

        {/* DESKTOP ACTIONS */}
        <div className="navbar-actions">

          <Link
            to="/login"
            className="nav-login"
          >
            Log In
          </Link>

          <Link
            to="/register"
            className="nav-get-started"
          >
            Get Started
            <ArrowRight size={16} />
          </Link>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">

          <button
            type="button"
            className="mobile-menu-link"
            onClick={() => handleSectionClick("explore")}
          >
            Explore
          </button>

          <button
            type="button"
            className="mobile-menu-link"
            onClick={() => handleSectionClick("how-it-works")}
          >
            How It Works
          </button>

          <button
            type="button"
            className="mobile-menu-link"
            onClick={() => handleSectionClick("roles")}
          >
            For Business
          </button>

          <button
            type="button"
            className="mobile-menu-link"
            onClick={() => handleSectionClick("about")}
          >
            About
          </button>

          <Link
            to="/login"
            className="mobile-login"
            onClick={() => setMenuOpen(false)}
          >
            Log In
          </Link>

          <Link
            to="/register"
            className="mobile-get-started"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
            <ArrowRight size={16} />
          </Link>

        </div>
      )}
    </nav>
  );
}

export default Navbar;
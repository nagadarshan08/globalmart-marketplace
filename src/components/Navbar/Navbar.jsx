import { useState } from "react";
import {
  Globe2,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-icon">
            <Globe2 size={21} strokeWidth={2.2} />
          </div>

          <span>
            Global<span className="logo-highlight">Mart</span>
          </span>
        </a>


        {/* Desktop Navigation */}
        <nav className="navbar-links">

          <a href="#explore">
            Explore
          </a>

          <a href="#how-it-works">
            How It Works
          </a>

          <a href="#business">
            For Business
          </a>

          <a href="#about">
            About
          </a>

        </nav>


        {/* Desktop Actions */}
        <div className="navbar-actions">

          <button className="login-button">
            Log In
          </button>

          <button className="get-started-button">
            Get Started
            <ArrowRight size={15} />
          </button>

        </div>


        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>


      {/* Mobile Navigation */}
      <div
        className={`mobile-menu ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >

        <a href="#explore" onClick={closeMenu}>
          Explore
        </a>

        <a href="#how-it-works" onClick={closeMenu}>
          How It Works
        </a>

        <a href="#business" onClick={closeMenu}>
          For Business
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>


        <div className="mobile-actions">

          <button className="mobile-login-button">
            Log In
          </button>

          <button className="mobile-get-started-button">
            Get Started
            <ArrowRight size={15} />
          </button>

        </div>

      </div>

    </header>
  );
}

export default Navbar;
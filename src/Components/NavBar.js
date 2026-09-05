import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const closeNavbar = () => {
    const collapseEl = document.getElementById("navbarSupportedContent");
    if (collapseEl && collapseEl.classList.contains("show")) {
      const bsCollapse =
        window.bootstrap.Collapse.getInstance(collapseEl) ||
        new window.bootstrap.Collapse(collapseEl, { toggle: false });
      bsCollapse.hide();
    }
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1030,
          transition: "transform 0.3s ease-in-out",
          transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsPulse
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/" onClick={closeNavbar}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business" onClick={closeNavbar}>Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment" onClick={closeNavbar}>Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general" onClick={closeNavbar}>General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health" onClick={closeNavbar}>Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science" onClick={closeNavbar}>Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports" onClick={closeNavbar}>Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology" onClick={closeNavbar}>Technology</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
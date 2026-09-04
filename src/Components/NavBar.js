import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  state = {
    showNavbar: true,
    lastScrollY: 0,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > this.state.lastScrollY && currentScrollY > 80) {
      this.setState({ showNavbar: false, lastScrollY: currentScrollY });
    } else {
      this.setState({ showNavbar: true, lastScrollY: currentScrollY });
    }
  };

  closeNavbar = () => {
    const collapseEl = document.getElementById("navbarSupportedContent");
    if (collapseEl && collapseEl.classList.contains("show")) {
      // eslint-disable-next-line no-undef
      const bsCollapse = window.bootstrap.Collapse.getInstance(collapseEl) 
        || new window.bootstrap.Collapse(collapseEl, { toggle: false });
      bsCollapse.hide();
    }
  };

  render() {
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
            transform: this.state.showNavbar
              ? "translateY(0)"
              : "translateY(-100%)",
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/" onClick={this.closeNavbar}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business" onClick={this.closeNavbar}>
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment" onClick={this.closeNavbar}>
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general" onClick={this.closeNavbar}>
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health" onClick={this.closeNavbar}>
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science" onClick={this.closeNavbar}>
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports" onClick={this.closeNavbar}>
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology" onClick={this.closeNavbar}>
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
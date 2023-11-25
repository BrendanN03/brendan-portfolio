import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();
  const links = [
    { to: "/#home", label: "Home" },
    { to: "/#about", label: "About" },
    { to: "/#experience", label: "Experience" },
    { to: "/#projects", label: "Projects" },
    { to: "/#contact", label: "Contact" },
  ];

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <header className="navbarShell" id={expandNavbar ? "open" : "close"}>
      <div className="navbar">
        <a className="brand" href="/#home" aria-label="Brendan Nguyen home">
          <span className="brandMark">BN</span>
          <span>
            Brendan
            <strong>Nguyen</strong>
          </span>
        </a>
        <div className="toggleButton">
          <button
            aria-label="Toggle navigation"
            onClick={() => {
              setExpandNavbar((prev) => !prev);
            }}
          >
            <ReorderIcon />
          </button>
        </div>
        <nav className="links" aria-label="Primary navigation">
          {links.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className={
                location.hash === link.to.replace("/", "") ||
                (link.to === "/#home" && !location.hash)
                  ? "active"
                  : undefined
              }
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

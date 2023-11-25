import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <main className="notFoundPage">
      <div>
        <p className="eyebrow">404</p>
        <h1>Page not found.</h1>
        <p>The page you are looking for does not exist yet.</p>
        <Link to="/#home">Return home</Link>
      </div>
    </main>
  );
}

export default NotFound;

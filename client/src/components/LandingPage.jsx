import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <h1>Bienvenido!</h1>
      {/* agregar logo */}
      <Link to="/home">
        <button>Ingresar</button>
      </Link>
    </div>
  );
}
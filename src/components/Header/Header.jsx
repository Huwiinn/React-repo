import React from "react";
import "./Header.css";

export default function Header({ children }) {
  return (
    <header className="Header_container">
      <h1>{children}</h1>
    </header>
  );
}

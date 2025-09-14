
import React from "react";
import "./Header.css";

const Header = ({ search, setSearch }) => {
  return (
    <header className="app-header">
      <div className="brand">
        <h1>Party Menu</h1>
        <p className="subtitle">Select dishes for your party</p>
      </div>
      <div className="search-wrap">
        <input
          className="search-input"
          aria-label="Search dishes"
          placeholder="Search dishes in selected category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Header;

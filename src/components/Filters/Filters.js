
import React from "react";
import "./Filters.css";

const Filters = ({ vegFilter, nonVegFilter, setVegFilter, setNonVegFilter }) => {
  return (
    <div className="filters">
      <label className="toggle">
        <input
          type="checkbox"
          checked={vegFilter}
          onChange={(e) => setVegFilter(e.target.checked)}
        />
        <span>Veg</span>
      </label>

      <label className="toggle">
        <input
          type="checkbox"
          checked={nonVegFilter}
          onChange={(e) => setNonVegFilter(e.target.checked)}
        />
        <span>Non-Veg</span>
      </label>
    </div>
  );
};

export default Filters;

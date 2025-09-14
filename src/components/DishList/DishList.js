
import React, { useContext, useEffect, useMemo } from "react";
import DishCard from "../DishCard/DishCard";
import "./DishList.css";
import { SelectionContext } from "../../contexts/SelectionContext";

const DishList = ({ dishes, activeMeal, search, vegFilter, nonVegFilter }) => {
  const { selectedIds } = useContext(SelectionContext);

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();
    return dishes.filter(d => {
      if (d.mealType !== activeMeal) return false;
      if (s && !d.name.toLowerCase().includes(s)) return false;
      if (!vegFilter && d.type === "VEG") return false;
      if (!nonVegFilter && d.type === "NON-VEG") return false;
      return true;
    });
  }, [dishes, activeMeal, search, vegFilter, nonVegFilter]);

  useEffect(() => {
    const map = {};
    dishes.forEach(d => {
      if (!map[d.mealType]) map[d.mealType] = 0;
      if (selectedIds.has(d.id)) map[d.mealType] += 1;
    });
    const nodes = document.querySelectorAll(".tab-count[data-meal]");
    nodes.forEach(n => {
      const key = n.getAttribute("data-meal");
      n.textContent = map[key] ? map[key] : 0;
    });
  }, [selectedIds, dishes]);

  return (
    <div className="dishlist">
      {filtered.length === 0 ? (
        <div className="empty">No dishes match your search & filters.</div>
      ) : (
        <div className="grid">
          {filtered.map(d => (
            <DishCard key={d.id} dish={d} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DishList;

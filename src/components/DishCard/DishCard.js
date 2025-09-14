
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./DishCard.css";
import { SelectionContext } from "../../contexts/SelectionContext";

const DishCard = ({ dish }) => {
  const { isSelected, toggleSelect } = useContext(SelectionContext);
  const selected = isSelected(dish.id);
  const navigate = useNavigate();

  return (
    <div className={`dish-card ${selected ? "selected" : ""}`}>
      <div className="img-wrap">
        <img src={dish.image} alt={dish.name} />
        <div className={`type-badge ${dish.type === "VEG" ? "veg" : "nonveg"}`}>
          {dish.type === "VEG" ? "Veg" : "Non-Veg"}
        </div>
      </div>

      <div className="dish-body">
        <h3 className="dish-name">{dish.name}</h3>
        <p className="dish-desc">{dish.description}</p>
        <div className="card-actions">
          <button
            className={`add-btn ${selected ? "remove" : "add"}`}
            onClick={() => toggleSelect(dish.id)}
          >
            {selected ? "Remove" : "Add"}
          </button>

          <button
            className="ingredient-link"
            onClick={() => navigate(`/ingredient/${dish.id}`)}
          >
            Ingredient
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;

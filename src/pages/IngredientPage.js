
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import dishesData from "../data/dishes.json";

import "./IngredientPage.css";

const IngredientPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dishId = Number(id);
  const dish = dishesData.find(d => d.id === dishId);

  if (!dish) {
    return (
      <div className="ingredient-page">
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
        <p>Dish not found.</p>
      </div>
    );
  }

  return (
    <div className="ingredient-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <div className="ingredient-card">
        <img src={dish.image} alt={dish.name} className="ingredient-image"/>
        <div className="ingredient-info">
          <h2>{dish.name}</h2>
          <p className="subdesc">{dish.description}</p>
          <h3>Ingredients</h3>
          <ul>
            {dish.ingredients.map((it, idx) => (
              <li key={idx}><strong>{it.name}</strong>: {it.qty}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IngredientPage;

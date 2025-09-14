
import React, { useContext, useMemo } from "react";
import { SelectionContext } from "../../contexts/SelectionContext";
import dishesData from "../../data/dishes.json";
import "./SummaryBar.css";
import { useNavigate } from "react-router-dom";
import { mealTabs } from "../../utils/helpers";

const SummaryBar = () => {
  const { selectedIds, totalSelected, clearAll } = useContext(SelectionContext);
  const navigate = useNavigate();

  const counts = useMemo(() => {
    const map = {};
    for (const t of mealTabs) map[t.key] = 0;
    dishesData.forEach(d => {
      if (selectedIds.has(d.id)) {
        map[d.mealType] = (map[d.mealType] || 0) + 1;
      }
    });
    return map;
  }, [selectedIds]);

  return (
    <div className="summary-bar">
      <div className="counts">
        {mealTabs.map(t => (
          <div className="count-item" key={t.key}>
            <div className="count">{counts[t.key] || 0}</div>
            <div className="label">{t.label}</div>
          </div>
        ))}
      </div>

      <div className="actions">
        <div className="total">Total: <strong>{totalSelected}</strong></div>
        <button className="clear-btn" onClick={clearAll}>Clear</button>
        <button
          className="continue-btn"
          onClick={() => alert(`Continue pressed — ${totalSelected} selected.`)}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SummaryBar;

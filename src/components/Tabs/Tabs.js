
import React from "react";
import "./Tabs.css";

const Tabs = ({ tabs, activeKey, onTabChange }) => {
  return (
    <div className="tabs">
      {tabs.map(tab => {
        return (
          <button
            key={tab.key}
            className={`tab-btn ${activeKey === tab.key ? "active" : ""}`}
            onClick={() => onTabChange(tab.key)}
          >
            {tab.label}
            <span className="tab-count" data-meal={tab.key}>0</span>
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;

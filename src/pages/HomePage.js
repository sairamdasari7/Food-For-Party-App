
import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Tabs from "../components/Tabs/Tabs";
import DishList from "../components/DishList/DishList";
import SummaryBar from "../components/Summary/SummaryBar";
import Filters from "../components/Filters/Filters";
import dishesData from "../data/dishes.json";
import { mealTabs } from "../utils/helpers";

import "./HomePage.css";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState(mealTabs[1].key); // default Main Course
  const [search, setSearch] = useState("");
  const [vegFilter, setVegFilter] = useState(true);
  const [nonVegFilter, setNonVegFilter] = useState(true);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    setDishes(dishesData);
  }, []);

  return (
    <div className="page-container">
      <Header search={search} setSearch={setSearch} />
      <main className="main-content">
        <Tabs
          tabs={mealTabs}
          activeKey={activeTab}
          onTabChange={setActiveTab}
        />
        <div className="controls-row">
          <Filters
            vegFilter={vegFilter}
            nonVegFilter={nonVegFilter}
            setVegFilter={setVegFilter}
            setNonVegFilter={setNonVegFilter}
          />
        </div>

        <DishList
          dishes={dishes}
          activeMeal={activeTab}
          search={search}
          vegFilter={vegFilter}
          nonVegFilter={nonVegFilter}
        />
      </main>

      <SummaryBar />
    </div>
  );
};

export default HomePage;

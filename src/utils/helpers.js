
export const mealTabs = [
  { key: "STARTER", label: "Starter" },
  { key: "MAIN COURSE", label: "Main Course" },
  { key: "DESSERT", label: "Dessert" },
  { key: "SIDES", label: "Sides" }
];

export const toDisplayType = (type) => (type === "VEG" ? "Veg" : "Non-Veg");


# Party Menu Selection App

A responsive ReactJS application to select dishes for a party. This scaffold includes all components, CSS and mock data so you can run it locally.

## Quick Start

1. Ensure Node.js (>=16) and npm are installed.
2. Create a new CRA app or paste these files into a React project created with Create React App.
   - If you used CRA: replace the `src/` folder with the `src/` here and replace `package.json` or install deps.
3. From the project folder:
   ```bash
   npm install
   npm start
   ```
4. Open `http://localhost:3000`

## Project structure (included)
```
party-menu-app-full/
├─ package.json
├─ README.md
├─ public/
│  ├─ index.html
│  └─ favicon.ico
└─ src/
   ├─ index.js
   ├─ App.js
   ├─ App.css
   ├─ data/dishes.json
   ├─ contexts/SelectionContext.js
   ├─ utils/helpers.js
   ├─ pages/
   │  ├─ HomePage.js
   │  └─ IngredientPage.js
   └─ components/
      ├─ Header/Header.js
      ├─ Header/Header.css
      ├─ Tabs/Tabs.js
      ├─ Tabs/Tabs.css
      ├─ Filters/Filters.js
      ├─ Filters/Filters.css
      ├─ DishList/DishList.js
      ├─ DishList/DishList.css
      ├─ DishCard/DishCard.js
      ├─ DishCard/DishCard.css
      ├─ Summary/SummaryBar.js
      └─ Summary/SummaryBar.css
```

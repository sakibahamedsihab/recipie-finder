import { useState } from "react";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import MealCard from "./components/MealCard.jsx";

function App() {
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState([]);

  async function handleSearch(event) {
    event.preventDefault();
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    const res = await fetch(url);
    const data = await res.json();
    setMeal(data.meals || []);
    console.log(meal);
  }

  return (
    <div className="bg-gray-50 min-h-screen p-5">
      <Header />
      <SearchBar
        setQuery={setQuery}
        onSearch={handleSearch}
        // query={query}
      />
      <div className="flex flex-wrap gap-5 justify-center p-5">
        {meal.map((singleMeal) => (
          <MealCard key={singleMeal.idMeal} {...singleMeal} />
        ))}
      </div>
    </div>
  );
}

export default App;

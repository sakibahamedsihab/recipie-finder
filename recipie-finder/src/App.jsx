import { useState } from "react";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import MealCard from "./components/MealCard.jsx";
import {Routes, Route} from 'react-router-dom'

function App() {
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSearch(event) {
    event.preventDefault();
    setError(false);
    setLoading(true);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    const res = await fetch(url);
    const data = await res.json();
    if (!data.meals) {
      setMeal([]);
      setError(true);
    } else {
      setMeal(data.meals);
      setError(false);
    }
    setLoading(false);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="bg-gray-50 min-h-screen p-5">
            <Header />
            <SearchBar
              setQuery={setQuery}
              onSearch={handleSearch}
              // query={query}
            />
            <div className="flex flex-wrap gap-5 justify-center p-5">
              {loading && (
                <p className="text-4xl font-bold text-blue-400">Loading...</p>
              )}
              {error && (
                <p className="text-4xl font-bold text-blue-400">
                  Error! No Recipie Found...
                </p>
              )}
              {!loading &&
                meal.map((singleMeal) => (
                  <MealCard key={singleMeal.idMeal} {...singleMeal} />
                ))}
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default App;

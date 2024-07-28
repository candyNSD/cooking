import React, { useEffect, useState } from "react";
import axios from "axios";
import { RecipesList } from "../Components/RecipesList";
import { Recipecontext } from "../Components/Recipecontext";

export const Search = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [recipename, setRecipename] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/recipes/search?q=${recipename}`);
        setRecipeList(response.data.recipes);
      } catch (error) {
        console.error("Error fetching the recipes:", error);
      }
    };

    fetchRecipes();
  }, [recipename]);

  const handleSearch = () => {
    setRecipename(recipename);
  };

  return (
    <div>
      <div className="flex flex-col items-center my-10">
        <img src="./assest/img/search1.png" style={{ width: "30%" }} alt="Search" />
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Search Recipes Name...."
            style={{ border: "3px solid #ffe819", outline: "none", width: "500px", borderRadius: "10px", padding: "10px" }}
            value={recipename}
            onChange={(e) => setRecipename(e.target.value)}
          />
          <button
            onClick={handleSearch}
            style={{ background: "#ffe819", width: "150px", borderRadius: "10px", padding: "13px", position: "absolute", right: "0" }}
          >
            Search
          </button>
        </div>
      </div>
      <div>
        <Recipecontext.Provider value={{ recipeList, setRecipeList, }}>
          <RecipesList />
        </Recipecontext.Provider>
      </div>
    </div>
  );
};
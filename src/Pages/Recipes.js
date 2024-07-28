import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Recipecontext } from "../Components/Recipecontext";
import { RecipesMenu } from "../Components/RecipesMenu";

export const Recipes = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching the recipe:", error);
      }
    };

    if (id) {
      fetchRecipe();
    }
  }, [id]);

  if (!recipe) {
    return <div className="flex justify-center items-center">
      <img src="/assest/img/cheff1.avif"/>
      <p className="text-3xl font-bold">Loading...</p></div>;
  }

  return (
    <div>
      
      <div>
        <Recipecontext.Provider value={{ recipe }}>
          <RecipesMenu />
        </Recipecontext.Provider>
      </div>
    </div>
  );
};
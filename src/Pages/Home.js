import React, { useEffect, useState } from "react";
import axios from "axios";
import { RecipesList } from "../Components/RecipesList";
import { Recipecontext } from "../Components/Recipecontext";

export const Home = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/recipes?limit=8 &skip=8");
        setRecipeList(response.data.recipes); 
      } catch (error) {
        console.error("Error fetching the recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <div className="flex justify-around m-2 items-center">
        <div>
          <img src="./assest/img/chef.avif" alt="sales" />
        </div>
        <div className="wrapper-box p-12 w-[70%]">
          <div className="border-l-4 border-[#f9a8d4] flex items-center flex-col" style={{ background: "#fff", width: "600px", padding: "40px" }}>
            <h3 className="font-bold text-6xl mb-4 leading-snug text-[#565252]">Learn Chef's Magic Recipes</h3>
            <p className="text-base mt-6 text-xl text-[#565252]">
              Experience a multicultural learning environment and a brand new state-of-the-art campus
            </p>
            <button className="bg-pink-400 text-white font-bold w-60 h-10 rounded mt-6 text-[#565252] text-xl">
              Join Now
            </button>
          </div>
        </div>
      </div>
      <div>     
         <h2 className="text-center text-3xl text-[#565252] font-bold my-10">The Best Recipes</h2>

        <Recipecontext.Provider value={{ recipeList, setRecipeList }}>
          <RecipesList />
        </Recipecontext.Provider>
      </div>

      <div className="flex flex-col p-5 bg-pink-200 m-5 rounded-lg items-center">
        <h2 className="text-center text-3xl text-[#565252] font-bold my-5">Be the first to know about the latest deals, receive new trending recipes & more!</h2>
        <div className="mb-10">
        <input type="text" placeholder="EmailAddress..." style={{ border: "3px solid #f472b6", outline: "none", width: "500px", borderRadius: "10px", padding: "10px" }}/>
        <button className="bg-pink-400 text-white font-bold w-60 h-12 mt-6 ml-3 text-[#565252] text-xl rounded-lg cursor-pointer">Subscripe</button>
        </div>
        
      </div>
    </div>
  );
};
import React, { useContext, useState } from "react";
import { Recipecontext } from "./Recipecontext";

export const RecipesMenu = () => {
  const { recipe } = useContext(Recipecontext);

  if (!recipe) {
    return <div className="text-center text-2xl">No recipe found.</div>;
  }

  return (
    <div className="m-28">
      <div className="flex my-10">
        <div
          className="flex items-center justify-center"
          style={{
            width: "100%",
            height: "300px",
            position: "relative",
            zIndex: "99999",
          }}
        >
          <img
            src={recipe.image}
            alt={recipe.name}
            style={{ width: "50%", height: "300px" }}
          />
        </div>
        <div className="flex justify-end absolute right-14">
          <img src="/assest/img/menu.png" style={{ width: "50%" }} alt="menu" />
        </div>
      </div>
      <h2 className="text-4xl text-[#565252] text-center font-bold">{recipe.name}</h2>
      <div className="flex justify-between mt-10">
      <div className="border-l-4 border-[#f9a8d4] flex items-center flex-col pl-2">
        <p>Prep: {recipe.prepTimeMinutes} mins</p>
        <p>Cook: {recipe.cookTimeMinutes} mins</p>
        <p>Yields: {recipe.servings} Servings</p>
      </div>
      <div className="items-center flex bg-[#f9a8d4] p-2">
        <p>cuisine: {recipe.cuisine}</p>
      </div>
      </div>
      
      <div className="flex justify-between mt-20">
        <div className="mb-10">
          <h3 className="text-2xl text-[#565252] text-center mb-10 font-bold">Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="mb-5 leading-snug">{index+1} .{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="mb-10">
          <h3 className="text-2xl text-[#565252] text-center mb-10 font-bold">Instructions:</h3>
          <ul>
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="mb-5 leading-snug">{index+1} . {instruction}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

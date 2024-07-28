import React, { useContext } from "react";
import { Recipecontext } from "./Recipecontext";
import { Link, useNavigate } from "react-router-dom";

export const RecipesList = () => {
  const { recipeList } = useContext(Recipecontext);

  const navigate = useNavigate();

  const recipeClick = () => {
    navigate("/Recipes");
  };
  return (
    <div>
      <div>
        <ul className="flex gap-3 flex-wrap m-5 justify-center">
          {recipeList.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  style={{
                    width: "300px",
                    height: "200px",
                    borderBottom: "3px solid #f9a8d4",
                  }}
                  onClick={recipeClick}
                />

                <p className="text-center">{recipe.name}</p>
                <div className="flex justify-around my-5 flex-wrap">
                  <span>
                    ⭐{recipe.rating} 🩷 {recipe.reviewCount}
                  </span>
                  <span>{recipe.cuisine}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

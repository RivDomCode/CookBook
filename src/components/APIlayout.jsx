import React from "react";
import { useFetch } from "../hooks/useFetch";
import { APICard } from "./APICard";
import ReactLoading from "react-loading";

export const APIlayout = ({ category, bars }) => {
  const { loading, data } = useFetch(category);
  console.log(data);

  return (
    <div className="my-recipes__recipesLayout">
      {loading && (
        <ReactLoading type={bars} color={"#5c9bdb"} height={66} width={37} />
      )}

      <h3>{category.toUpperCase()}</h3>
      {data.map((recipeAPI) => (
        <APICard key={recipeAPI.id} {...recipeAPI} />
      ))}
    </div>
  );
};

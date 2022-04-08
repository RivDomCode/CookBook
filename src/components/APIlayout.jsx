import React from "react";
import { useFetch } from "../hooks/useFetch";
import { APICard } from "./APICard";
import { Loading } from "./Loading";

export const APIlayout = ({ category, bars }) => {
  const { loading, data } = useFetch(category);

  return (
    <>
      <div className="APIcategory">{category.toUpperCase()}</div>
      <div className="my-recipes__recipesLayout">
        {loading && <Loading />}

        {data.map((recipeAPI) => (
          <APICard key={recipeAPI.id} {...recipeAPI} />
        ))}
      </div>
    </>
  );
};

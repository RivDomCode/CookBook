import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { APISearchScreen } from '../components/APISearchScreen';
import { MyRecipesScreen } from '../components/MyRecipesScreen';
import { Navbar } from '../components/Navbar';
import { NewRecipeScreen } from '../components/NewRecipeScreen';
import { RecipeDetailsScreen } from '../components/RecipeDetailsScreen';

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MyRecipesScreen />} />
                    <Route path="RecipeDetail" element={<RecipeDetailsScreen />} />
                    <Route path="APISearch" element={<APISearchScreen />} />
                    <Route path="NewRecipe" element={<NewRecipeScreen />} />
                </Routes>

            </BrowserRouter>
        </>
    );
};

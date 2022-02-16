import React, { useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { APISearchScreen } from '../components/APISearchScreen';
import { Footer } from '../components/Footer';
import { MyRecipesScreen } from '../components/MyRecipesScreen';
import { Navbar } from '../components/Navbar';
import { NewRecipeScreen } from '../components/NewRecipeScreen';
import { RecipeDetailsScreen } from '../components/RecipeDetailsScreen';

export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <NewRecipeScreen />
                <Routes>
                    <Route path="/" element={<MyRecipesScreen />} />
                    <Route path="RecipeDetail" element={<RecipeDetailsScreen />} />
                    <Route path="APISearch" element={<APISearchScreen />} />
                    <Route path="NewRecipe" element={<NewRecipeScreen />} />
                    <Route path="*" element={<MyRecipesScreen />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
};

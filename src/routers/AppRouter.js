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
import { RecipeDetailsScreen } from '../components/RecipeDetailsScreen';

export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<MyRecipesScreen />} />
                    <Route path="RecipeDetail/:id" element={<RecipeDetailsScreen />} />
                    <Route path="APISearch" element={<APISearchScreen />} />
                    <Route path="*" element={<MyRecipesScreen />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
};

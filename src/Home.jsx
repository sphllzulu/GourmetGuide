import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, TextField, Grid, Typography, Slider, Box } from '@mui/material';
import RecipeForm from './Form';
import RecipeList from './List';
import PrimarySearchAppBar from './AppBar';

import Carousel from './Carousel';

// import SwipeableTextMobileStepper from './SliderCarousel';

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('https://gourmetguide-2.onrender.com/recipes');
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://gourmetguide-2.onrender.com/recipes?q=${search}`);
      setRecipes(response.data);
    } catch (error) {
      console.error('Error searching recipes:', error);
    }
  };

  const handleRecipeUpdate = async () => {
    fetchRecipes(); // Refetch recipes
  };

  return (
    <Box>
      <PrimarySearchAppBar/>
      <Carousel/>
      <RecipeForm onRecipeUpdate={handleRecipeUpdate} />
      <RecipeList recipes={recipes} onRecipeUpdate={handleRecipeUpdate} />
    </Box>
  );
}

export default Home;

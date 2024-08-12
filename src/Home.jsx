// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Button, TextField, Grid, Typography } from '@mui/material';
// import RecipeForm from './Form';
// import RecipeList from './List';

// function Home() {
//   const [recipes, setRecipes] = useState([]);
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/recipes');
//         setRecipes(response.data);
//       } catch (error) {
//         console.error('Error fetching recipes:', error);
//       }
//     };
//     fetchRecipes();
//   }, []);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3001/recipes?q=${search}`);
//       setRecipes(response.data);
//     } catch (error) {
//       console.error('Error searching recipes:', error);
//     }
//   };

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>Recipe Manager</Typography>
//       <TextField
//         label="Search Recipes"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
//       <RecipeForm />
//       <RecipeList recipes={recipes} />
//     </Container>
//   );
// }

// export default Home;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, TextField, Grid, Typography, Slider, Box } from '@mui/material';
import RecipeForm from './Form';
import RecipeList from './List';
import PrimarySearchAppBar from './AppBar';
import SliderCarousel from './SliderCarousel';
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
      const response = await axios.get('http://localhost:3001/recipes');
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/recipes?q=${search}`);
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
      <Typography variant="h4" gutterBottom>Recipe Manager</Typography>
      <TextField
        label="Search Recipes"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
      <RecipeForm onRecipeUpdate={handleRecipeUpdate} />
      <RecipeList recipes={recipes} onRecipeUpdate={handleRecipeUpdate} />
    </Box>
  );
}

export default Home;

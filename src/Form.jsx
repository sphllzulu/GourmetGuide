// import React, { useState } from 'react';
// import axios from 'axios';
// import { TextField, Button, Grid, Container } from '@mui/material';

// function Form() {
//   const [recipe, setRecipe] = useState({
//     name: '',
//     ingredients: '',
//     instructions: '',
//     category: '',
//     prepTime: '',
//     cookTime: '',
//     servings: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setRecipe({ ...recipe, [name]: value });
//   };

//   const handleSubmit = async () => {
//     try {
//       await axios.post('http://localhost:3001/recipes', recipe);
//       setRecipe({
//         name: '',
//         ingredients: '',
//         instructions: '',
//         category: '',
//         prepTime: '',
//         cookTime: '',
//         servings: ''
//       });
//     } catch (error) {
//       console.error('Error adding recipe:', error);
//     }
//   };

//   return (
//     <Container>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <TextField
//             name="name"
//             label="Recipe Name"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={recipe.name}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             name="ingredients"
//             label="Ingredients"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={recipe.ingredients}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             name="instructions"
//             label="Instructions"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={recipe.instructions}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             name="category"
//             label="Category"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={recipe.category}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             name="prepTime"
//             label="Preparation Time"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={recipe.prepTime}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             name="cookTime"
//             label="Cooking Time"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={recipe.cookTime}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             name="servings"
//             label="Servings"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={recipe.servings}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <Button variant="contained" color="primary" onClick={handleSubmit}>Add Recipe</Button>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default Form;


import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Container } from '@mui/material';

function RecipeForm({ onRecipeUpdate }) {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    category: '',
    prepTime: '',
    cookTime: '',
    servings: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3001/recipes', recipe);
      setRecipe({
        name: '',
        ingredients: '',
        instructions: '',
        category: '',
        prepTime: '',
        cookTime: '',
        servings: ''
      });
      onRecipeUpdate(); // Notify parent to update recipe list
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="name"
            label="Recipe Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={recipe.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="ingredients"
            label="Ingredients"
            variant="outlined"
            fullWidth
            margin="normal"
            value={recipe.ingredients}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="instructions"
            label="Instructions"
            variant="outlined"
            fullWidth
            margin="normal"
            value={recipe.instructions}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="category"
            label="Category"
            variant="outlined"
            fullWidth
            margin="normal"
            value={recipe.category}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="prepTime"
            label="Preparation Time"
            variant="outlined"
            fullWidth
            margin="normal"
            value={recipe.prepTime}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="cookTime"
            label="Cooking Time"
            variant="outlined"
            fullWidth
            margin="normal"
            value={recipe.cookTime}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="servings"
            label="Servings"
            variant="outlined"
            fullWidth
            margin="normal"
            value={recipe.servings}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>Add Recipe</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default RecipeForm;

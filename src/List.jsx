// import React from 'react';
// import axios from 'axios';
// import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

// function List({ recipes }) {
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3001/recipes/${id}`);
//       // Handle the state update or re-fetching here
//     } catch (error) {
//       console.error('Error deleting recipe:', error);
//     }
//   };

//   return (
//     <Grid container spacing={2}>
//       {recipes.map(recipe => (
//         <Grid item xs={12} sm={6} md={4} key={recipe.id}>
//           <Card>
//             <CardContent>
//               <Typography variant="h5">{recipe.name}</Typography>
//               <Typography>Ingredients: {recipe.ingredients}</Typography>
//               <Typography>Instructions: {recipe.instructions}</Typography>
//               <Typography>Category: {recipe.category}</Typography>
//               <Typography>Preparation Time: {recipe.prepTime}</Typography>
//               <Typography>Cooking Time: {recipe.cookTime}</Typography>
//               <Typography>Servings: {recipe.servings}</Typography>
//               <Button variant="contained" color="secondary" onClick={() => handleDelete(recipe.id)}>Delete</Button>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }

// export default List;

// import React from 'react';
// import axios from 'axios';
// import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

// function List({ recipes, onRecipeUpdate }) {
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3001/recipes/${id}`);
//       onRecipeUpdate(); // Notify parent to update recipe list
//     } catch (error) {
//       console.error('Error deleting recipe:', error);
//     }
//   };

//   return (
//     <Grid container spacing={2}>
//       {recipes.map(recipe => (
//         <Grid item xs={12} sm={6} md={4} key={recipe.id}>
//           <Card>
//             <CardContent>
//               <Typography variant="h5">{recipe.name}</Typography>
//               <Typography>Ingredients: {recipe.ingredients}</Typography>
//               <Typography>Instructions: {recipe.instructions}</Typography>
//               <Typography>Category: {recipe.category}</Typography>
//               <Typography>Preparation Time: {recipe.prepTime}</Typography>
//               <Typography>Cooking Time: {recipe.cookTime}</Typography>
//               <Typography>Servings: {recipe.servings}</Typography>
//               <Button variant="contained" color="secondary" onClick={() => handleDelete(recipe.id)}>Delete</Button>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }

// export default List;


// import React from 'react';
// import axios from 'axios';
// import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

// function List({ recipes, onRecipeUpdate }) {
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3001/recipes/${id}`);
//       onRecipeUpdate(); // Notify parent to update recipe list
//     } catch (error) {
//       console.error('Error deleting recipe:', error);
//     }
//   };

//   return (
//     <Grid container spacing={2}>
//       {recipes.map(recipe => (
//         <Grid item xs={12} sm={6} md={4} key={recipe.id}>
//           <Card>
//             {recipe.image && (
//               <img
//                 src={recipe.image}
//                 alt={recipe.name}
//                 style={{ width: '100%', height: '200px', objectFit: 'cover' }}
//               />
//             )}
//             <CardContent>
//               <Typography variant="h5">{recipe.name}</Typography>
//               <Typography>Ingredients: {recipe.ingredients}</Typography>
//               <Typography>Instructions: {recipe.instructions}</Typography>
//               <Typography>Category: {recipe.category}</Typography>
//               <Typography>Preparation Time: {recipe.prepTime}</Typography>
//               <Typography>Cooking Time: {recipe.cookTime}</Typography>
//               <Typography>Servings: {recipe.servings}</Typography>
//               <Button variant="contained" sx={{mr:'20px'}} color="secondary" onClick={() => handleDelete(recipe.id)}>Delete</Button>
//               <Button variant="contained" color="secondary" onClick={() => handleDelete(recipe.id)}>Edit</Button>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }

// export default List;


import React from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

function List({ recipes, onRecipeUpdate }) {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/recipes/${id}`);
      onRecipeUpdate(); // Notify parent to update recipe list
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  return (
    <Grid container spacing={2}>
      {recipes.map(recipe => (
        <Grid item xs={12} sm={6} md={4} key={recipe.id}>
          <Card>
            <CardContent>
              <Typography variant="h5">{recipe.name}</Typography>
              <Typography>Ingredients: {recipe.ingredients}</Typography>
              <Typography>Instructions: {recipe.instructions}</Typography>
              <Typography>Category: {recipe.category}</Typography>
              <Typography>Preparation Time: {recipe.prepTime}</Typography>
              <Typography>Cooking Time: {recipe.cookTime}</Typography>
              <Typography>Servings: {recipe.servings}</Typography>
              {recipe.image && (
                <img
                  src={recipe.image}
                  alt="Recipe"
                  style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
                />
              )}
              <Button variant="contained" color="secondary" onClick={() => handleDelete(recipe.id)}>Delete</Button>
              <Button variant="contained" color="secondary" onClick={() => handleDelete(recipe.id)}>Edit</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default List;

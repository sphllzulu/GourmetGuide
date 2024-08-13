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
//     <Grid container spacing={3} sx={{display:'flex', justifyContent:'center'}}>
//       {recipes.map(recipe => (
//         <Grid item xs={12} sm={6} md={3} key={recipe.id}>
//           <Card>
//             <CardContent>
//               <Typography variant="h5">{recipe.name}</Typography>
//               <Typography>Ingredients: {recipe.ingredients}</Typography>
//               <Typography>Instructions: {recipe.instructions}</Typography>
//               <Typography>Category: {recipe.category}</Typography>
//               <Typography>Preparation Time: {recipe.prepTime}</Typography>
//               <Typography>Cooking Time: {recipe.cookTime}</Typography>
//               <Typography>Servings: {recipe.servings}</Typography>
//               {recipe.image && (
//                 <img
//                   src={recipe.image}
//                   alt="Recipe"
//                   style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
//                 />
//               )}
//               <Button variant="contained" color="secondary" sx={{backgroundColor:'orange', mr:'10px', }} onClick={() => handleDelete(recipe.id)}>Delete</Button>
//               <Button variant="contained" color="secondary" sx={{backgroundColor:'orange'}} onClick={() => handleDelete(recipe.id)}>Edit</Button>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }

// export default List;


import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Button, Grid, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Input } from '@mui/material';

function List({ recipes, onRecipeUpdate }) {
  const [editRecipe, setEditRecipe] = useState(null);
  const [open, setOpen] = useState(false);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/recipes/${id}`);
      onRecipeUpdate(); // Notify parent to update recipe list
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  const handleEditClick = (recipe) => {
    setEditRecipe(recipe);
    setOpen(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditRecipe({ ...editRecipe, [name]: value });
  };

  const handleEditImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditRecipe({ ...editRecipe, image: reader.result }); // Set base64 URL
      };
      
    }
  };

  const handleEditSubmit = async () => {
    try {
      await axios.patch(`http://localhost:3001/recipes/${editRecipe.id}`, editRecipe);
      setEditRecipe(null);
      setOpen(false);
      onRecipeUpdate(); // Notify parent to update recipe list
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };

  const handleClose = () => {
    setEditRecipe(null);
    setOpen(false);
  };

  return (
    <div>
      <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        {recipes.map(recipe => (
          <Grid item xs={12} sm={6} md={3} key={recipe.id}>
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
                <Button variant="contained" color="secondary" sx={{ backgroundColor: 'orange', mr: '10px' }} onClick={() => handleDelete(recipe.id)}>Delete</Button>
                <Button variant="contained" color="secondary" sx={{ backgroundColor: 'orange' }} onClick={() => handleEditClick(recipe)}>Edit</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {editRecipe && (
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogTitle>Edit Recipe</DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  label="Recipe Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={editRecipe.name}
                  onChange={handleEditChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="ingredients"
                  label="Ingredients"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={editRecipe.ingredients}
                  onChange={handleEditChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="instructions"
                  label="Instructions"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={editRecipe.instructions}
                  onChange={handleEditChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="category"
                  label="Category"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={editRecipe.category}
                  onChange={handleEditChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="prepTime"
                  label="Preparation Time"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={editRecipe.prepTime}
                  onChange={handleEditChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="cookTime"
                  label="Cooking Time"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={editRecipe.cookTime}
                  onChange={handleEditChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="servings"
                  label="Servings"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={editRecipe.servings}
                  onChange={handleEditChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleEditImageChange}
                />
              </Grid>
              <Grid item xs={12}>
                {editRecipe.image && (
                  <img
                    src={editRecipe.image}
                    alt="Recipe"
                    style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
                  />
                )}
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" color="primary" onClick={handleEditSubmit}>
              Update Recipe
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}

export default List;


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

//   const handleEdit = async (id) => {
    
//   };

//   const categorizedRecipes = recipes.reduce((acc, recipe) => {
//     if (recipe.isDefault) {
//       if (!acc['Default']) acc['Default'] = [];
//       acc['Default'].push(recipe);
//     } else {
//       if (!acc[recipe.category]) acc[recipe.category] = [];
//       acc[recipe.category].push(recipe);
//     }
//     return acc;
//   }, {});

//   return (
//     <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
//       {Object.keys(categorizedRecipes).map((category) => (
//         <Grid item xs={12} key={category}>
//           <Typography variant="h4">{category}</Typography>
//           <Grid container spacing={3} sx={{width:'90%', display:'flex', justifyContent:'center'}}>
//             {categorizedRecipes[category].map(recipe => (
//               <Grid item xs={12} sm={6} md={3}  key={recipe.id}>
//                 <Card>
//                   <CardContent>
//                     <Typography variant="h5">{recipe.name}</Typography>
//                     <Typography>Ingredients: {recipe.ingredients}</Typography>
//                     <Typography>Instructions: {recipe.instructions}</Typography>
//                     <Typography>Category: {recipe.category}</Typography>
//                     <Typography>Preparation Time: {recipe.prepTime}</Typography>
//                     <Typography>Cooking Time: {recipe.cookTime}</Typography>
//                     <Typography>Servings: {recipe.servings}</Typography>
//                     {recipe.image && (
//                       <img
//                         src={recipe.image}
//                         alt="Recipe"
//                         style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
//                       />
//                     )}
//                     {!recipe.isDefault && (
//                       <>
//                         <Button
//                           variant="contained"
//                           color="secondary"
//                           sx={{ backgroundColor: 'orange', mr: '10px' }}
//                           onClick={() => handleDelete(recipe.id)}
//                         >
//                           Delete
//                         </Button>
//                         <Button
//                           variant="contained"
//                           color="secondary"
//                           sx={{ backgroundColor: 'orange' }}
//                           onClick={() => handleEdit(recipe.id)}
//                         >
//                           Edit
//                         </Button>
//                       </>
//                     )}
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }

// export default List;

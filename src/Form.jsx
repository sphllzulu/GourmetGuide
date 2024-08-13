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


// import React, { useState } from 'react';
// import axios from 'axios';
// import { TextField, Button, Grid, Container } from '@mui/material';

// function RecipeForm({ onRecipeUpdate }) {
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
//       onRecipeUpdate(); // Notify parent to update recipe list
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

// export default RecipeForm;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { TextField, Button, Grid, Container, Input } from '@mui/material';

// function Form({ onRecipeUpdate }) {
//   const [recipe, setRecipe] = useState({
//     name: '',
//     ingredients: '',
//     instructions: '',
//     category: '',
//     prepTime: '',
//     cookTime: '',
//     servings: '',
//     image: '' 
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setRecipe({ ...recipe, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setRecipe({ ...recipe, image: reader.result }); // Set image URL
//       };
//       reader.readAsDataURL(file); // Convert file to base64 URL
//     }
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
//         servings: '',
//         image: ''
//       });
//       onRecipeUpdate(); 
      
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
//           <Input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           {recipe.image && (
//             <img
//               src={recipe.image}
//               alt="Recipe"
//               style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
//             />
//           )}
//         </Grid>
//         <Grid item xs={12}>
//           <Button variant="contained" color="primary" onClick={handleSubmit}>Add Recipe</Button>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default Form;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { TextField, Button, Grid, Container, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

// function Form({ onRecipeUpdate }) {
//   const [recipe, setRecipe] = useState({
//     name: '',
//     ingredients: '',
//     instructions: '',
//     category: '',
//     prepTime: '',
//     cookTime: '',
//     servings: '',
//     image: ''
//   });

//   const [open, setOpen] = useState(false);

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
//         servings: '',
//         image: ''
//       });
//       setOpen(false); // Close dialog
//       onRecipeUpdate(); // Notify parent to update recipe list
//     } catch (error) {
//       console.error('Error adding recipe:', error);
//     }
//   };

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <Container>
//       <Button variant="contained" color="primary" onClick={handleOpen} sx={{fontSize:'2rem', fontWeight:'900',borderRadius:'50%', backgroundColor:'orange', mr:'auto'}}>
//         +
//       </Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Add New Recipe</DialogTitle>
//         <DialogContent>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 name="name"
//                 label="Recipe Name"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 value={recipe.name}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 name="ingredients"
//                 label="Ingredients"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 value={recipe.ingredients}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 name="instructions"
//                 label="Instructions"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 value={recipe.instructions}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 name="category"
//                 label="Category"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 value={recipe.category}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 name="prepTime"
//                 label="Preparation Time"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 value={recipe.prepTime}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 name="cookTime"
//                 label="Cooking Time"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 value={recipe.cookTime}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 name="servings"
//                 label="Servings"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 value={recipe.servings}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 name="image"
//                 label="Image URL"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 value={recipe.image}
//                 onChange={handleChange}
//               />
//             </Grid>
//           </Grid>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button variant="contained" color="primary" onClick={handleSubmit}>
//             Add Recipe
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// }

// export default Form;


import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Container, Dialog, DialogActions, DialogContent, DialogTitle, Input } from '@mui/material';

function Form({ onRecipeUpdate }) {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    category: '',
    prepTime: '',
    cookTime: '',
    servings: '',
    image: ''
  });

  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setRecipe({ ...recipe, image: reader.result }); // Set base64 URL
      };
      reader.readAsDataURL(file); // Convert file to base64 URL
    }
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3001/recipes', { ...recipe, isDefault: false });
      setRecipe({
        name: '',
        ingredients: '',
        instructions: '',
        category: '',
        prepTime: '',
        cookTime: '',
        servings: '',
        image: ''
      });
      setOpen(false); // Close dialog
      onRecipeUpdate(); // Notify parent to update recipe list
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Button variant="contained" color="primary" onClick={handleOpen} sx={{ fontSize: '2rem', fontWeight: '900', borderRadius: '50%', backgroundColor: 'orange', mb:'10px' }}>
        +
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Add New Recipe</DialogTitle>
        <DialogContent>
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
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Grid>
            <Grid item xs={12}>
              {recipe.image && (
                <img
                  src={recipe.image}
                  alt="Recipe"
                  style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
                />
              )}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Add Recipe
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Form;

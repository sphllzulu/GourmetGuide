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


// import React, { useState } from 'react';
// import axios from 'axios';
// import { TextField, Button, Grid, Container, Dialog, DialogActions, DialogContent, DialogTitle, Input } from '@mui/material';

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

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setRecipe({ ...recipe, image: reader.result }); // Set base64 URL
//       };
//       reader.readAsDataURL(file); // Convert file to base64 URL
//     }
//   };

//   const handleSubmit = async () => {
//     try {
//       await axios.post('http://localhost:3001/recipes', { ...recipe, isDefault: false });
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
//       <Button variant="contained" color="primary" onClick={handleOpen} sx={{ fontSize: '2rem', fontWeight: '900', borderRadius: '50%', backgroundColor: 'orange', mb:'10px' }}>
//         +
//       </Button>
//       <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
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
//               <Input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               {recipe.image && (
//                 <img
//                   src={recipe.image}
//                   alt="Recipe"
//                   style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
//                 />
//               )}
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



// import React, { useState } from 'react';
// import axios from 'axios';
// import {
//   TextField,
//   Button,
//   Grid,
//   Container,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Input,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel
// } from '@mui/material';

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

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setRecipe({ ...recipe, image: reader.result }); // Set base64 URL
//       };
//       reader.readAsDataURL(file); // Convert file to base64 URL
//     }
//   };

//   const handleSubmit = async () => {
//     try {
//       await axios.post('http://localhost:3001/recipes', { ...recipe, isDefault: false });
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
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleOpen}
//         sx={{ fontSize: '2rem', fontWeight: '900', borderRadius: '50%', backgroundColor: 'orange', mb: '10px' }}
//       >
//         +
//       </Button>
//       <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
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
//               <FormControl fullWidth margin="normal">
//                 <InputLabel>Category</InputLabel>
//                 <Select
//                   name="category"
//                   value={recipe.category}
//                   onChange={handleChange}
//                   label="Category"
//                 >
//                   <MenuItem value="Breakfast">Breakfast</MenuItem>
//                   <MenuItem value="Lunch">Lunch</MenuItem>
//                   <MenuItem value="Supper">Supper</MenuItem>
//                   <MenuItem value="Salads">Salads</MenuItem>
//                   <MenuItem value="Dessert">Dessert</MenuItem>
//                 </Select>
//               </FormControl>
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
//               <Input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               {recipe.image && (
//                 <img
//                   src={recipe.image}
//                   alt="Recipe"
//                   style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
//                 />
//               )}
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


// import React, { useState } from 'react';
// import axios from 'axios';
// import {
//   TextField,
//   Button,
//   Grid,
//   Container,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Input,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel
// } from '@mui/material';

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

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         // Create an Image object to resize
//         const img = new Image();
//         img.src = reader.result;

//         img.onload = () => {
//           const canvas = document.createElement('canvas');
//           const ctx = canvas.getContext('2d');
//           const maxWidth = 800; // Max width of the image
//           const maxHeight = 800; // Max height of the image
//           let width = img.width;
//           let height = img.height;

//           // Calculate new dimensions
//           if (width > height) {
//             if (width > maxWidth) {
//               height *= maxWidth / width;
//               width = maxWidth;
//             }
//           } else {
//             if (height > maxHeight) {
//               width *= maxHeight / height;
//               height = maxHeight;
//             }
//           }

//           canvas.width = width;
//           canvas.height = height;
//           ctx.drawImage(img, 0, 0, width, height);

//           // Convert canvas to base64
//           const newImage = canvas.toDataURL(file.type);
//           setRecipe({ ...recipe, image: newImage });
//         };
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async () => {
//     try {
//       await axios.post('http://localhost:3001/recipes', { ...recipe, isDefault: false });
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
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleOpen}
//         sx={{ fontSize: '2rem', fontWeight: '900', borderRadius: '50%', backgroundColor: 'orange', mb: '10px' }}
//       >
//         +
//       </Button>
//       <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
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
//               <FormControl fullWidth margin="normal">
//                 <InputLabel>Category</InputLabel>
//                 <Select
//                   name="category"
//                   value={recipe.category}
//                   onChange={handleChange}
//                   label="Category"
//                 >
//                   <MenuItem value="Breakfast">Breakfast</MenuItem>
//                   <MenuItem value="Lunch">Lunch</MenuItem>
//                   <MenuItem value="Supper">Supper</MenuItem>
//                   <MenuItem value="Salads">Salads</MenuItem>
//                   <MenuItem value="Dessert">Dessert</MenuItem>
//                 </Select>
//               </FormControl>
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
//               <Input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               {recipe.image && (
//                 <img
//                   src={recipe.image}
//                   alt="Recipe"
//                   style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
//                 />
//               )}
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
import {
  TextField,
  Button,
  Grid,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Input,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';

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
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('http://localhost:3001/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data.fileUrl; // Adjust based on your API response
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  const handleSubmit = async () => {
    try {
      let imageUrl = '';
      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }

      await axios.post('http://localhost:3001/recipes', { ...recipe, image: imageUrl, isDefault: false });
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
      setImageFile(null);
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
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        sx={{  borderRadius: '20px', backgroundColor: 'orange', m: '10px' }}
      >
        Add recipe
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Add New Recipe</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                label="Recipe Name"
                variant="filled"
                fullWidth
                margin="normal"
                value={recipe.name}
                onChange={handleChange}
                sx={{borderBottom: '2px solid orange', outline:'none'}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="ingredients"
                label="Ingredients"
                variant="filled"
                fullWidth
                margin="normal"
                value={recipe.ingredients}
                onChange={handleChange}
                sx={{borderBottom: '2px solid orange', outline:'none'}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="instructions"
                label="Instructions"
                variant="filled"
                fullWidth
                margin="normal"
                value={recipe.instructions}
                onChange={handleChange}
                sx={{borderBottom: '2px solid orange', outline:'none'}}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  
                  value={recipe.category}
                  onChange={handleChange}
                  label="Category"
                  sx={{border: '2px solid orange', outline:'none'}}
                >
                  <MenuItem value="Breakfast">Breakfast</MenuItem>
                  <MenuItem value="Lunch">Lunch</MenuItem>
                  <MenuItem value="Supper">Supper</MenuItem>
                  <MenuItem value="Salads">Salads</MenuItem>
                  <MenuItem value="Dessert">Dessert</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="prepTime"
                label="Preparation Time"
                variant="filled"
                fullWidth
                margin="normal"
                value={recipe.prepTime}
                onChange={handleChange}
                sx={{borderBottom: '2px solid orange', outline:'none'}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="cookTime"
                label="Cooking Time"
                variant="filled"
                fullWidth
                margin="normal"
                value={recipe.cookTime}
                onChange={handleChange}
                sx={{borderBottom: '2px solid orange', outline:'none'}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="servings"
                label="Servings"
                variant="filled"
                fullWidth
                margin="normal"
                value={recipe.servings}
                onChange={handleChange}
                sx={{borderBottom: '2px solid orange', outline:'none'}}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                sx={{borderBottom: '2px solid orange', outline:'none'}}
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
          <Button onClick={handleClose} sx={{color:"orangered"}}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleSubmit} sx={{background:"orange"}}>
            Add Recipe
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Form;

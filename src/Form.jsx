


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

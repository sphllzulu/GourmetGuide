


import React, { useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Input,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import { styled } from '@mui/system';

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#f9a825', // Light shade of orange
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
}));

const HiddenContent = styled('div')(({ open }) => ({
  maxHeight: open ? '1000px' : '0',
  overflow: 'hidden',
  transition: 'max-height 0.3s ease-out',
}));

const RecipeImage = styled('img')({
  width: '100%',
  height: '150px', 
  objectFit: 'cover',
  borderRadius: '8px',
  marginTop: '8px',
});

const StyledSelect = styled(Select)(({ theme }) => ({
  backgroundColor: 'orange',
  '& .MuiSelect-select': {
    color: 'white',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'orange',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  transition: 'background-color 0.3s ease',
}));

function List({ recipes, onRecipeUpdate, currentUserId, onSearch }) {
  const [editRecipe, setEditRecipe] = useState(null);
  const [open, setOpen] = useState(false);
  const [expandedRecipeId, setExpandedRecipeId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  // Handles filtering by category and search keyword
  const filteredRecipes = recipes
    .filter(recipe => 
      (selectedCategory ? recipe.category === selectedCategory : true) &&
      (searchKeyword ? recipe.name.toLowerCase().includes(searchKeyword.toLowerCase()) : true)
    );

  // Handle change in category filter
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    const keyword = event.target.value;
    setSearchKeyword(keyword);
    onSearch(keyword); // Notify parent component to update search keyword
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/recipes/${id}`);
      onRecipeUpdate();
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
        const img = new Image();
        img.src = reader.result;

        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          const maxWidth = 800; // Max width of the image
          const maxHeight = 800; // Max height of the image
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);

          const newImage = canvas.toDataURL(file.type);
          setEditRecipe({ ...editRecipe, image: newImage });
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditSubmit = async () => {
    try {
      await axios.patch(`http://localhost:3001/recipes/${editRecipe.id}`, editRecipe);
      setEditRecipe(null);
      setOpen(false);
      onRecipeUpdate(); 
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };

  const handleClose = () => {
    setEditRecipe(null);
    setOpen(false);
  };

  const handleViewMoreClick = (id) => {
    setExpandedRecipeId(expandedRecipeId === id ? null : id);
  };

  return (
    <div>
      {/* Search Bar and Category Dropdown */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search recipes..."
            value={searchKeyword}
            onChange={handleSearchChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="category-select-label">Category</InputLabel>
            <StyledSelect
              labelId="category-select-label"
              value={selectedCategory}
              onChange={handleCategoryChange}
              label="Category"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Breakfast">Breakfast</MenuItem>
              <MenuItem value="Lunch">Lunch</MenuItem>
              <MenuItem value="Supper">Supper</MenuItem>
              <MenuItem value="Salads">Salads</MenuItem>
              <MenuItem value="Dessert">Dessert</MenuItem>
            </StyledSelect>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        {filteredRecipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={3} key={recipe.id}>
            <StyledCard>
              <CardContent>
                <Typography variant="h5">{recipe.name}</Typography>
                <Typography variant="subtitle1">{recipe.category}</Typography>
                {recipe.image && (
                  <RecipeImage src={recipe.image} alt="Recipe" />
                )}
                <HiddenContent open={expandedRecipeId === recipe.id}>
                  <Typography>Ingredients: {recipe.ingredients}</Typography>
                  <Typography>Instructions: {recipe.instructions}</Typography>
                  <Typography>Preparation Time: {recipe.prepTime}</Typography>
                  <Typography>Cooking Time: {recipe.cookTime}</Typography>
                  <Typography>Servings: {recipe.servings}</Typography>
                </HiddenContent>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ backgroundColor: 'orange', mt: '10px' }}
                  onClick={() => handleViewMoreClick(recipe.id)}
                >
                  {expandedRecipeId === recipe.id ? 'View Less' : 'View More'}
                </Button>
               
                {!recipe.isDefault && (
                  <>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ backgroundColor: 'orange', mt: '10px', mr: '10px' }}
                      onClick={() => handleDelete(recipe.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ backgroundColor: 'orange', mt: '10px' }}
                      onClick={() => handleEditClick(recipe)}
                    >
                      Edit
                    </Button>
                  </>
                )}
              </CardContent>
            </StyledCard>
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
                  variant="filled"
                  fullWidth
                  margin="normal"
                  value={editRecipe.name}
                  onChange={handleEditChange}
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
                  value={editRecipe.ingredients}
                  onChange={handleEditChange}
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
                  value={editRecipe.instructions}
                  onChange={handleEditChange}
                  sx={{borderBottom: '2px solid orange', outline:'none'}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="category"
                  label="Category"
                  variant="filled"
                  fullWidth
                  margin="normal"
                  value={editRecipe.category}
                  onChange={handleEditChange}
                  sx={{borderBottom: '2px solid orange', outline:'none'}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="prepTime"
                  label="Preparation Time"
                  variant="filled"
                  fullWidth
                  margin="normal"
                  value={editRecipe.prepTime}
                  onChange={handleEditChange}
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
                  value={editRecipe.cookTime}
                  onChange={handleEditChange}
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
                  value={editRecipe.servings}
                  onChange={handleEditChange}
                  sx={{borderBottom: '2px solid orange', outline:'none'}}
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
                  <RecipeImage src={editRecipe.image} alt="Recipe" />
                )}
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} sx={{color: "orangered"}}>Cancel</Button>
            <Button variant="contained" sx={{background: "orange"}} onClick={handleEditSubmit}>
              Update Recipe
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}

export default List;

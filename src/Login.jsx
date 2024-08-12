// import React, { useState } from 'react';
// import { TextField, Button, Container, Typography,Box } from '@mui/material';
// import axios from 'axios';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post('http://localhost:3001/users', { email, password });
//       console.log('Logged in:', response.data);
//     } catch (error) {
//       console.error('Error logging in:', error);
//     }
//   };

//   return (
//     <Box sx={{margin: 'auto', width:'300px'}}>
//       <Typography variant="h4" gutterBottom>Login</Typography>
//       <TextField
//         label="Email"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <TextField
//         label="Password"
//         type="password"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <Button variant="contained" color="primary" onClick={handleSubmit} sx={{backgroundColor:'teal'}}>Login</Button>
//     </Box>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid, Paper, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3001/users', {
        params: { username, password },
      });
      
      if (response.data.length > 0) {
        navigate('/'); // Redirect to home page on successful login
      } else {
        setError('Invalid username or password.');
      }
    } catch (error) {
      setError('Failed to login. Please try again.');
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={3} sx={{ padding: 3, width: '100%', maxWidth: 400 }}>
        <Typography variant="h5" gutterBottom align="center">
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Grid>
            {error && (
              <Grid item xs={12}>
                <Typography color="error" align="center">{error}</Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ padding: 1.5, backgroundColor: 'teal' }}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center', marginTop: 2 }}>
              <Typography variant="body2">
                Don't have an account?{' '}
                <Link href="/register" variant="body2">
                  Register
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Login;

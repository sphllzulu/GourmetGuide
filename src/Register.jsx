// // import React, { useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // import { TextField, Button, Container, Typography,Box } from '@mui/material';
// // import axios from 'axios';

// // function Register() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleRegister = async () => {
// //     try {
// //       const response = await axios.post('http://localhost:3001/users', { email, password });
// //       console.log('Registered:', response.data);
      
// //     } catch (error) {
// //       console.error('Error registering:', error);
// //     }
// //   };

// //   return (
// //     <Box sx={{margin: 'auto', width:'400px' }}>
// //       <Typography variant="h4" gutterBottom>Register</Typography>
// //       <TextField
// //         label="Email"
// //         variant="outlined"
// //         fullWidth
// //         margin="normal"
// //         value={email}
// //         onChange={(e) => setEmail(e.target.value)}
// //       />
// //       <TextField
// //         label="Password"
// //         type="password"
// //         variant="outlined"
// //         fullWidth
// //         margin="normal"
// //         value={password}
// //         onChange={(e) => setPassword(e.target.value)}
// //       />
// //       <Button variant="contained" color="primary" onClick={handleRegister}>Register</Button>
// //     </Box>
// //   );
// // }

// // export default Register;


// import React, { useState } from 'react';
// import { TextField, Button, Typography, Container, Grid, Paper } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Registration() {
//   const [name, setName] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:3001/users', { name, username, password });
//       navigate('/login'); // Redirect to login page on successful registration
//     } catch (error) {
//       setError('Failed to register. Please try again.');
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <Paper elevation={3} sx={{ padding: 3 }}>
//         <Typography variant="h5" gutterBottom>
//           Register
//         </Typography>
//         <form onSubmit={handleRegister}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 label="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 label="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 label="Password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </Grid>
//             {error && (
//               <Grid item xs={12}>
//                 <Typography color="error">{error}</Typography>
//               </Grid>
//             )}
//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//               >
//                 Register
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </Paper>
//     </Container>
//   );
// }

// export default Registration;


import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid, Paper, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Registration() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/users', { name, username, password });
      navigate('/login'); // Redirect to login page on successful registration
    } catch (error) {
      setError('Failed to register. Please try again.');
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={3} sx={{ padding: 3, width: '100%', maxWidth: 400 }}>
        <Typography variant="h5" gutterBottom align="center">
          Register
        </Typography>
        <form onSubmit={handleRegister}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Grid>
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
                sx={{ padding: 1.5, backgroundColor:'teal' }}
              >
                Register
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center', marginTop: 2 }}>
              <Typography variant="body2">
                Already have an account?{' '}
                <Link href="/login" variant="body2">
                  Log In
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Registration;

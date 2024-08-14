
import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid, Paper, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
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
                sx={{ padding: 1.5, backgroundColor:'orange' }}
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

export default Register;


// import React, { useState } from 'react';
// import { TextField, Button, Typography, Container, Grid, Paper, Link } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Register() {
//   const [name, setName] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3001/users', { name, username, password });
//       const user = response.data;
//       // Store user ID and username in local storage
//       localStorage.setItem('userId', user.id);
//       localStorage.setItem('username', user.username);
//       navigate('/login'); // Redirect to login page on successful registration
//     } catch (error) {
//       setError('Failed to register. Please try again.');
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <Paper elevation={3} sx={{ padding: 3, width: '100%', maxWidth: 400 }}>
//         <Typography variant="h5" gutterBottom align="center">
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
//                 <Typography color="error" align="center">{error}</Typography>
//               </Grid>
//             )}
//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//                 sx={{ padding: 1.5, backgroundColor:'teal' }}
//               >
//                 Register
//               </Button>
//             </Grid>
//             <Grid item xs={12} sx={{ textAlign: 'center', marginTop: 2 }}>
//               <Typography variant="body2">
//                 Already have an account?{' '}
//                 <Link href="/login" variant="body2">
//                   Log In
//                 </Link>
//               </Typography>
//             </Grid>
//           </Grid>
//         </form>
//       </Paper>
//     </Container>
//   );
// }

// export default Register;


// import React, { useState } from 'react';
// import { TextField, Button, Typography, Container, Grid, Paper, Link } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Register() {
//   const [name, setName] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3001/users', { name, username, password });
//       const user = response.data;
//       // Store user ID, username, and password in local storage
//       localStorage.setItem('userId', user.id);
//       localStorage.setItem('username', user.username);
//       localStorage.setItem('password', password); // Store password in local storage
//       navigate('/login'); // Redirect to login page on successful registration
//     } catch (error) {
//       setError('Failed to register. Please try again.');
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <Paper elevation={3} sx={{ padding: 3, width: '100%', maxWidth: 400 }}>
//         <Typography variant="h5" gutterBottom align="center">
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
//                 <Typography color="error" align="center">{error}</Typography>
//               </Grid>
//             )}
//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//                 sx={{ padding: 1.5, backgroundColor: 'teal' }}
//               >
//                 Register
//               </Button>
//             </Grid>
//             <Grid item xs={12} sx={{ textAlign: 'center', marginTop: 2 }}>
//               <Typography variant="body2">
//                 Already have an account?{' '}
//                 <Link href="/login" variant="body2">
//                   Log In
//                 </Link>
//               </Typography>
//             </Grid>
//           </Grid>
//         </form>
//       </Paper>
//     </Container>
//   );
// }

// export default Register;

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { userSignUp } from '../../../app/slices/userSlice';
import './signup.css';

// const theme = createTheme();

export default function SignUp() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userSignUp(Object.fromEntries(new FormData(e.target))));
  };

  return (
    <form onSubmit={submitHandler} autoComplete="off" className="form">
      <div className="control">
        <h1>
          Sign Up
        </h1>
      </div>

      <div className="control block-cube block-input">
        <input name="name" placeholder="Name" type="name" />
        <div className="bg-top">
          <div className="bg-inner" />
        </div>
        <div className="bg-right">
          <div className="bg-inner" />
        </div>
        <div className="bg">
          <div className="bg-inner" />
        </div>
      </div>

      <div className="control block-cube block-input">
        <input name="email" placeholder="Email" type="text" />
        <div className="bg-top">
          <div className="bg-inner" />
        </div>
        <div className="bg-right">
          <div className="bg-inner" />
        </div>
        <div className="bg">
          <div className="bg-inner" />
        </div>
      </div>

      <div className="control block-cube block-input">
        <input name="password" placeholder="Password" type="password" />
        <div className="bg-top">
          <div className="bg-inner" />
        </div>
        <div className="bg-right">
          <div className="bg-inner" />
        </div>
        <div className="bg">
          <div className="bg-inner" />
        </div>
      </div>

      <button className="btn block-cube block-cube-hover" type="submit">
        <div className="bg-top">
          <div className="bg-inner" />
        </div>
        <div className="bg-right">
          <div className="bg-inner" />
        </div>
        <div className="bg">
          <div className="bg-inner" />
        </div>
        <div className="text">
          Sign Up
        </div>
      </button>

    </form>

  );
}

// <ThemeProvider theme={theme}>
//   <Container component="main" maxWidth="xs">
//     <CssBaseline />
//     <Box
//       sx={{
//         marginTop: 8,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//       }}
//     >
//       <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
//       <Typography component="h1" variant="h5">
//         Sign up
//       </Typography>
//       <Box component="form" noValidate onSubmit={submitHandler} sx={{ mt: 3 }}>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               autoComplete="given-name"
//               name="name"
//               required
//               fullWidth
//               id="name"
//               label="Name"
//               autoFocus
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="new-password"
//             />
//           </Grid>

//         </Grid>
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           sx={{ mt: 3, mb: 2 }}
//         >
//           Sign Up
//         </Button>
//         <Grid container justifyContent="flex-end">
//           <Grid item>
//             <Link to="/user/authorization" variant="body2">
//               Already have an account? Sign in
//             </Link>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   </Container>
// </ThemeProvider>

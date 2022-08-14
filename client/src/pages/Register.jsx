/*
------Register page------
-Allow user to create a new account
-Navigate the user to the homepage after they have regisetred
-Redirect user to homepage if already logged in 
*/
import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useRegister} from "../hooks/useRegister"

 const  Register = () => {

  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const {registerUser, error, isLoading} = useRegister()

  //register a new user when signup button is pressed
  const handleClick = async (event) => {
    event.preventDefault()
    await registerUser(registerUsername, registerPassword)
    // setRegisterUsername("")
    // setRegisterPassword("")
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up for Study Cards
          </Typography>
          <Box component="form" onSubmit={handleClick} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(event)=>{setRegisterUsername(event.target.value)}}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(event)=>{setRegisterPassword(event.target.value)}}
            />
            <Grid container>
              {error && <div>{error}</div>}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isLoading}
            >
              Sign Up
            </Button>
         
            <Grid container>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Already have an account? Sign in here"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  )}
  export default Register
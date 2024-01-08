import React , {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import doodle from '../../assets/Main/doddle.jpg'
import { useTheme } from '@emotion/react';

function Copyright(props) {

    const [appname,setAppname]= useState('Education App')
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {`© ${appname}`},All rights Reserved
      
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.



export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const theme = useTheme()

  return (
      <Grid container component="main" sx={{ height: '100vh' , backgroundColor: '#f3f4f6' }}>
       
        
        <Grid item xs={12} sm={8} md={6}  elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Log In
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
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
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
        >
            <Box  sx={{
              mx: 4,
              my:1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: '#fff',
              border:1,
              borderColor:'#fff',
              borderRadius:5
            }}>
              <Box sx={{padding:2}}>
                <Typography variant='h4' sx={{textAlign:'center'}} >
                  Welcome Back
                </Typography >
                <Typography  sx={{textAlign:'center'}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae 
                </Typography>
              </Box>
              <Box sx={{padding:2 , display: 'flex',
              flexDirection: 'column',alignItems: 'center',}}>
                <img 
                  height={'1%'} 
                    width={350} 
                    src={doodle} 
                    alt='doodle' 
                 />
              </Box>
            </Box>
        </Grid>
      </Grid>
  );
}
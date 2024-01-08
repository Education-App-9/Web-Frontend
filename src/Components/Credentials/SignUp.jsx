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
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


function Copyright(props) {

    const [appname,setAppname]= useState('Education App')
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {`© ${appname}`},All rights Reserved
      
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.



export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const theme = useTheme()

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
      <Grid container component="main" sx={{ height: '100vh' , backgroundColor: '#f3f4f6' }}>
       
        
        <Grid item xs={12} sm={8} md={6}  elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 3,
              paddingX:'15%',
              paddingY:'1%'
            }}
          >
            <Box sx={{display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',}}>
              <Typography sx={{fontFamily:'bold'}}  variant="h5">
                Login
              </Typography>
            </Box>
            <Box component="form" noValidate onSubmit={handleSubmit} 
              sx={{ mt: 1 ,
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',}}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                sx={{
                  backgroundColor:'#fff'
                }}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  backgroundColor:'#fff'
                }}
              />

              <Button
                type="submit"
                fullWidth
                
                sx={{ mt: 3, mb: 2 , 
                    backgroundColor:'#178582' ,
                    border: '1 solid #178582' , borderRadius:2 ,
                    color : '#fff',
                    "&:hover" :{
                        color:'#000',
                        backgroundColor: '#0da39f'

                    } }}
              >
                Log In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/" variant="body2">
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
              my:2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: '#fff',
              border:1,
              borderColor:'#fff',
              borderRadius:5
            }}>
              <Box sx={{padding:1.5}}>
                <Typography variant='h4' sx={{textAlign:'center' ,fontWeight:'bold'}} >
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
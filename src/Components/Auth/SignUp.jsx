import React , {useEffect, useState} from 'react';
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
import { getCourses } from '../../Api/Others/Courses/getCourses';


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
    const [appname,setAppname]= useState('Education App')

    useEffect(()=>{
        getCourses()
    },[])

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
  const [showCPassword, setShowCPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowCPassword = () => {
    setShowCPassword(!showCPassword);
  };

  const handleMouseDownCPassword = (event) => {
    event.preventDefault();
  };
  return (
      <Grid container component="main" sx={{ height: '100vh' , backgroundColor: '#f3f4f6' }}>
       
        
        <Grid item xs={12} sm={8} md={6}  elevation={6} square>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                mx:3,
                my:4
                }}>
              <Typography 
                sx={{
                    fontWeight:'bolder',
                    color:theme.palette.secondary.main
                }}  
                variant="h4"
                >
                {appname}
              </Typography>
            </Box>
          <Box
            sx={{
              mx: 3,
              paddingX:'15%'
            }}
          >
            <Box sx={{display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',}}>
              <Typography sx={{fontWeight:'bolder' , mb:3}}  variant="h5">
                Register
              </Typography>
            </Box>
            <Box component="form" noValidate onSubmit={handleSubmit} 
              sx={{ 
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',}}>
                <TextField
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                defaultValue="Small"
                margin='normall'
                size="small"
                sx={{
                  backgroundColor:'#fff',
                            }}
                autoFocus
              />
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                defaultValue="Small"
                margin='normal'
                size="small"
                sx={{
                  backgroundColor:'#fff'
                }}
                autoFocus
              />
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                defaultValue="Small"
                margin='normal'
                size="small"
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
              <TextField
                required
                fullWidth
                name="Cpassword"
                label="Confirm Password"
                type={showCPassword ? 'text' : 'password'}
                id="Cpassword"
                autoComplete="current-password"
                defaultValue="Small"
                margin='normal'
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowCPassword}
                        onMouseDown={handleMouseDownCPassword}
                        edge="end"
                      >
                        {showCPassword ? <VisibilityOff /> : <Visibility />}
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
                    backgroundColor:theme.palette.secondary.main ,
                    border: '1 solid #178582' , borderRadius:2 ,
                    color : '#fff',
                    "&:hover" :{
                        color:'#000',
                        backgroundColor: '#0da39f'

                    } }}
              >
                Register
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/SignIn" variant="body2">
                    {"Already have an account? Login"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 3 }} />
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
                <Typography variant='h5' sx={{textAlign:'center' ,fontWeight:'bold'}} >
                  Create Account And Start learning
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
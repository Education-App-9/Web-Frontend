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
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import doodle from '../../assets/Main/doddle.jpg'
import doodleXS from '../../assets/Main/doddlexs.jpg'
import { useTheme } from '@emotion/react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { getCourses } from '../../Api/Others/Courses/getCourses';
import { useMediaQuery } from '@mui/material';
import { Register } from '../../Api/Auth/register';
import { faClose } from '@fortawesome/free-solid-svg-icons';



export default function SignUp() {
    const [appname,setAppname]= useState('Education App')
    const [isDifferent , setIsDifferent] = useState(false)
    const [nameError , setNameError] = useState(false)
    const [emailError , setEmailError] = useState(false)
    const [emailMessage , setEmailMessage] = useState('')

    const navigate = useNavigate()
    const isXSmallScreen = useMediaQuery('(max-width: 599px)');
    const isSmallScreen = useMediaQuery('(max-width: 871px)');
   
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if(data.get("name") == ''){
      setNameError(true)
    }
    else if(data.get("email") == ''){
      setEmailError(true)
      setEmailMessage('Please provide Valid Email')
    }
   else if(data.get("password") !== data.get("Cpassword")){
     setIsDifferent(true)
    }
    else{
      setNameError(false)
      setEmailError(false)
      setIsDifferent(false)
      const User = 
              {
                name: data.get('name'),
                email: data.get('email'),
                password:data.get('password'),
                confirmPassword:data.get('Cpassword'),
                step:1
              }
      const res = await Register(User)
      if(res.success){
        navigate('/description' ,   {
          state: {user : User}
         })
      }
      else{
        setEmailError(true)
        setEmailMessage(res.message)
      }
      
    }
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
      <Grid container component="main" 
        sx={{  
              backgroundColor:{ 
                xs: '#fff' , sm: '#f3f4f6'
              } }}>

              {isXSmallScreen && (
                <img
                  src={doodleXS}
                  alt="doodleXS"
                  style={{
                    width: '100%',
                    height: 170,
                    margin:0
                  }}
                />
              )}
       
        
        <Grid item xs={12} sm={6} md={6}>
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
                    color:theme.palette.secondary.main,
                   
                }}  
                variant="h4"
                >
                {appname}
              </Typography>
            </Box>
          <Box
            sx={{
              mx: 3,
              paddingX: isSmallScreen ? '5%': '15%'
            }}
          >
            <Box sx={{display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',}}>
              <Typography sx={{fontWeight:'bolder' , mb:'8%' , 
              mt: {xs:'5%' , md : '0%'}}}  variant="h5">
                Register
              </Typography>
            </Box>
            <Box component="form" noValidate onSubmit={handleSubmit} 
              sx={{ 
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
                mt:{xs : '10%' , md:'0%'}
            }}>
                <TextField
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                margin='normal'
                size="small"
                sx={{
                  backgroundColor:'#fff',
                            }}
                autoFocus
              />
              {nameError && (
              <p style={{color:'red'}}>
                Please provide Valid Name
              </p>
              )}
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                margin='normal'
                size="small"
                sx={{
                  backgroundColor:'#fff'
                }}
                autoFocus
              />
              {emailError && (
              <p style={{color:'red'}}>
                {emailMessage}
              </p>
              )}
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
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
              {isDifferent && (
              <p style={{color:'red'}}>
                Password and Confirm Password Should be same
              </p>
              )}
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
                Next
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/SignIn" variant="body2">
                    {"Already have an account? Login"}
                  </Link>
                </Grid>
              </Grid>
              <Box sx={{alignSelf:'start',mt:'5.7%'}}>
              <Typography variant="body2" color="text.secondary"  >
                {`© ${appname}`},All rights Reserved
                
              </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={6}
          md={6}
          sx={{display:{xs:'none' , sm : 'block' ,md:'block'}}}
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
              <Box sx={{padding:1}}>
              <Typography
              variant="h4"
              sx={{ textAlign: 'center', fontWeight: 'bold',
               fontSize: isSmallScreen ? '1.25rem' : '1.5rem',
               mt: isSmallScreen && '5%' 
               }}
            >
                  Create Account And Start learning
                </Typography >
                <Typography sx={{ textAlign: 'center',
                  fontSize: isSmallScreen ? '1rem' : '1.2rem',
                  mt: isSmallScreen && '5%' 
                  }}>
                 
                  Unlock a world of knowledge with our innovative education app - where learning meets technology for an immersive and personalized educational experience.
                </Typography>
              </Box>
              <Box sx={{padding:2 , display: 'flex',
              flexDirection: 'column',alignItems: 'center',}}>
              <img 
              height={isSmallScreen ? '50%' : '100%'}
               width={isSmallScreen ? 240 : 340}
               style={{marginTop:isSmallScreen? '13%':0}}
                 src={doodle} 
                 alt='doodle' 
              />
              </Box>
            </Box>
        </Grid>
      </Grid>
  );
}
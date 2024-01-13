import React, { useDebugValue, useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import doodle from '../../assets/Main/doddle.jpg';
import doodleXS from '../../assets/Main/doddlexs.jpg';
import { useTheme } from '@emotion/react';
import { getCourses } from '../../Api/Others/Courses/getCourses';

export default function Main1() {
  const [appname, setAppname] = useState('Education App');
  const [currentComponent, setCurrentComponent] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');
  const [courseOptions, setCourseOptions] = useState([]);


      const getCoursesData = async () => {
      try {
        const res = await getCourses();
        if(res != null)
        {
          const options = res.map(course => ({ label: course.name, value: course._id }));
          setCourseOptions(options);
      }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
  }

  useEffect(()=>{
    getCoursesData()
    
  },[])

  const navigate = useNavigate();
  const isXSmallScreen = useMediaQuery('(max-width: 599px)');
  const isSmallScreen = useMediaQuery('(max-width: 871px)');

  const components = [
    { id: 1, image: doodle, 
      content: 'What Best Describes You?', 
      options: [
        {label : 'Student College' ,value : 'Student College'}, 
        {label : 'Student' ,value : 'Student'},        
        {label : 'United Kingdom' ,value : 'United Kingdom'}, 
      ]
    },
    { id: 2, image: doodle, 
      content: 'What Subject Do you need to be help with', 
      options: courseOptions },
    { id: 3, image: doodle,  
      content: 'What is your degree level?', 
      options: [
        {label : 'College' ,value : 'College'}, 
        {label : 'University' ,value : 'University'},        
        {label : 'School' ,value : 'School'}, 
      ]},
    { id: 4, image: doodle, 
      content: 'What Best Describes You?', 
      options: [
        {label : 'Student College' ,value : 'Student College'}, 
        {label : 'Student' ,value : 'Student'},        
        {label : 'United Kingdom' ,value : 'United Kingdom'}, 
      ]},
    { id: 5, image: doodle, 
      content: 'What Best Describes You?', 
      options: [
        {label : 'Student College' ,value : 'Student College'}, 
        {label : 'Student' ,value : 'Student'},        
        {label : 'United Kingdom' ,value : 'United Kingdom'}, 
      ] },
  ];

  const theme = useTheme();

  const handleOptionSelect = (option) => {
    console.log(option)
    setSelectedOption(option);
    if (currentComponent < components.length) {
      setCurrentComponent(currentComponent + 1);
    } else {
      navigate('/SignUp');
    }
  };

  const handleBack = () => {
    if (currentComponent > 1) {
      setCurrentComponent(currentComponent - 1);
      setSelectedOption('');
    } else {
      navigate('/SignUp');
    }
  };

  return (
    <Grid
      container
      component="main"
      sx={{
        height: { lg: '100vh', xs: '0vh' },
        backgroundColor: { xs: '#fff', sm: '#f3f4f6' },
      }}
    >
      {isXSmallScreen && (
        <img
          src={doodleXS}
          alt="doodleXS"
          style={{
            width: '100%',
            height: 170,
            margin: 0,
          }}
        />
      )}

      <Grid item xs={12} sm={6} md={6}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            mx: 3,
            my: 4,
          }}
        >
          <Typography
            sx={{
              fontWeight: 'bolder',
              color: theme.palette.secondary.main,
            }}
            variant="h4"
          >
            {appname}
          </Typography>
        </Box>
        <Box
          sx={{
            mx: 3,
            paddingX: isSmallScreen ? '5%' : '15%',
          }}
        >
          <Box sx={{ width: '80%', mt: '16%' }}>
            <ArrowBackIosIcon sx={{ mb: 3 }} onClick={handleBack} />
            <LinearProgress variant="determinate" color="secondary" value={(currentComponent) * 20} />
          </Box>
          <Typography>{components[currentComponent - 1].content}</Typography>
          <Box sx={{ margin: '10px 0' }}>
            {components[currentComponent - 1].options.map((option, index) => (
              <Button
                key={index}
                variant="contained"
                color="primary"
                style={{ marginRight: '10px', marginBottom: '10px' }}
                onClick={() => handleOptionSelect(option.value)}
              >
                {option.label}
              </Button>
            ))}
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={6}
        md={6}
        sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}
      >
        <Box
          sx={{
            mx: 4,
            my: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: '#fff',
            border: 1,
            borderColor: '#fff',
            borderRadius: 5,
          }}
        >
          <Box sx={{ padding: 1.5 }}>
            <Typography
              variant="h4"
              sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: isSmallScreen ? '1.5rem' : '2rem',
                mt: isSmallScreen && '5%',
              }}
            >
              Create Account And Start learning
            </Typography>
            <Typography
              sx={{
                textAlign: 'center',
                fontSize: isSmallScreen ? '1rem' : '1.2rem',
                mt: isSmallScreen && '5%',
              }}
            >
              Unlock a world of knowledge with our innovative education app - where learning meets
              technology for an immersive and personalized educational experience.
            </Typography>
          </Box>
          <Box
            sx={{
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              height={isSmallScreen ? '50%' : '100%'}
              width={isSmallScreen ? 240 : 340}
              style={{ marginTop: isSmallScreen ? '13%' : 0 }}
              src={doodle}
              alt="doodle"
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

import { Button, Box,Typography, Grid } from '@mui/material'
import React, { Fragment, Suspense, lazy, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = lazy(()=> import('./Navbar'))
import { Card, CardContent,CardActions } from '@mui/material';
import Icon from '@mui/material/Icon';
import Toggle from 'react-toggle'
import {  useThemeContext } from '../Theme';
import { getStats } from '../Api/Landing Page/Stats'
import { useTheme } from '@emotion/react'
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import Backimage from '../../src/assets/Main/Backimage.jpg'
import frame1 from '../../src/assets/Main/Frame1.png'
import frame2 from  '../../src/assets/Main/Frame2.png'
import FeatureCard from './LandingPage_Component/FeatureCard'
import SearchIcon from '@mui/icons-material/Search';

export default function LandingPage() {
  const { isDarkMode, toggleTheme } = useThemeContext();
  const navigate = useNavigate()

  const features = [
    {
      icon:<SearchIcon fontSize='large'  sx={{color:'white', fontSize:40}}/>,
      title: 'Intuitive search functionality',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      icon: <SearchIcon fontSize='large'  sx={{color:'white', fontSize:40}}/>,
      title: 'Chat Integration',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      icon: <SearchIcon fontSize='large'  sx={{color:'white', fontSize:40}}/>,
      title: 'Intuitive search functionality',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      icon: <SearchIcon fontSize='large'  sx={{color:'white', fontSize:40}}/>,
      title: 'Chat Integration',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      icon:<SearchIcon fontSize='large'  sx={{color:'white', fontSize:40}}/>,
      title: 'Intuitive search functionality',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      icon:<SearchIcon fontSize='large'  sx={{color:'white', fontSize:40}}/>,
      title: 'Chat Integration',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
  ];
const theme= useTheme()
  useEffect(()=>{
    const res = getStats()
    
  },[])
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Fragment> 
          <Navbar />
          <Box sx={{backgroundColor:theme.palette.background.landingBG}}>
          <Box sx={{display:'flex',flexDirection:'column',paddingTop:'7%',justifyContent:'center' }}>
          
          <Typography sx={{fontWeight:'bold',fontSize:'30px',
          display:'flex',justifyContent:'center',
          color:theme.palette.text.primary}}>
          TAKE KNOWLEDGE TO
          </Typography>
          <Typography sx={{fontWeight:'bold',fontSize:'30px',
          marginLeft:'1%',display:'flex',justifyContent:'center',
          color:theme.palette.text.primary}}>
          THE NEXT LEVEL
          </Typography>
          <Typography sx={{fontSize:'10px',marginLeft:'1%',
          display:'flex',justifyContent:'center',
          color:theme.palette.text.primary}}>
          Lorem Ipsum is simply dummy
           text of the printing and typesetting industry
          </Typography>
          <Typography  sx={{fontSize:'10px',marginLeft:'1%',
          display:'flex',justifyContent:'center',
          color:theme.palette.text.primary}}>
          Lorem Ipsum has been the industry.
          </Typography>
          </Box>
          

           <Box sx={{display:"flex",justifyContent:'center',paddingTop:'3%'}}>
          <Button sx={{
            backgroundColor:theme.palette.text.primary,
            color:theme.palette.background.default,
            padding :'1% 2%',
            border:1,borderRadius:2 
            ,':hover' : { 
                backgroundColor : theme.palette.background.default,
                color : theme.palette.secondary.main
            }}}
            onClick={()=> navigate('')}
            >
            <AppleIcon  sx={{marginRight:"6px"}}/>
         Download for IOS
         </Button>
          <Button sx={{marginLeft:'1%',
            backgroundColor:theme.palette.text.primary,
            color:theme.palette.background.default,
            padding :'1% 2%',
            border:1,borderRadius:2 
            ,':hover' : { 
                backgroundColor : theme.palette.background.default,
                color : theme.palette.secondary.main
            }}}
            onClick={()=> navigate('')}
            >
            <AndroidIcon sx={{marginRight:"6px"}} />
         Download for android
         </Button>
            </Box>
         <Box sx={{ position: 'relative',display:'flex', justifyContent:'center',marginTop:"8%"}}>
         <Typography
         variant="h1" 
         sx={{
           position: 'absolute',
           zIndex: 1,
           marginTop:"12%" ,
           color:theme.palette.secondary.main
         }}
       >
         APP NAME
       </Typography>
         <img src={frame1} style={{height:400 ,zIndex:2}} />
        
         </Box>
         <Box sx = {{display:'flex', 
         justifyContent:'center',marginTop:"8%"}}>
         <img src={frame2} style={{height:400 }} />
         
         </Box>
          </Box>
          <Box sx={{
            backgroundColor:'#000',
            marginY:'2%',
            pb:'2%'
           }}>
          
          <Box>
          <Typography sx={{fontWeight:'bold',fontSize:'30px',
          display:'flex',justifyContent:'center',
          color:theme.palette.text.button,
          paddingY:'4%'
          }}>
            Key Features
          </Typography>
          </Box>
        <Grid container component="main" >
          
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} sx={{display:'flex' ,justifyContent:'space-evenly'}}>
                <Card sx={{ maxWidth: 345, m: 2 ,
                  border:1 , borderRadius:5,
                  backgroundColor:'#1d1e1f' }}>
                  <CardContent>
                    <Box sx={{display:'flex' , justifyContent:'flex-start' ,
                    border:1, borderRadius:'50%',width:'25%',
                    backgroundColor:theme.palette.secondary.main,
                    borderColor:theme.palette.secondary.main,
                    padding:2
                    }}>
                    {feature.icon}
                    </Box>
                    <Box sx={{paddingY:'5%' , marginY:'2%'}}>
                    <Typography gutterBottom variant="h5" component="div"
                      sx={{color:theme.palette.text.button}}
                    >
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary"
                     sx={{color:theme.palette.text.button}}>
                      {feature.description}
                    </Typography>

                    </Box>
                  </CardContent>
                  
                </Card>
            </Grid>
        ))}
        </Grid>
          </Box>
      </Fragment>
    </Suspense>
  )
}
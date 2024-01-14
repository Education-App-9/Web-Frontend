import { Button, Box,Typography } from '@mui/material'
import React, { Fragment, Suspense, lazy, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = lazy(()=> import('./Navbar'))
import Toggle from 'react-toggle'
import {  useThemeContext } from '../Theme';
import { getStats } from '../Api/Landing Page/Stats'
import { useTheme } from '@emotion/react'
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import Backimage from '../../src/assets/Main/Backimage.jpg'
import frame1 from '../../src/assets/Main/Frame1.jpg'
import frame2 from  '../../src/assets/Main/Frame2.jpg'

export default function LandingPage() {
  const { isDarkMode, toggleTheme } = useThemeContext();
  const navigate = useNavigate()
const theme= useTheme()
  useEffect(()=>{
    const res = getStats()
    
  },[])
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Fragment> 
          <Navbar />
          <Box sx={{display:'flex',justifyContent:"center", paddingTop:'7%',}} >
          <img src={Backimage} style={{height:90,}} />
          </Box>
          <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
          
          <Typography sx={{fontWeight:'bold',fontSize:'30px',display:'flex',justifyContent:'center'}}>
          TAKE KNOWLEDGE TO
          </Typography>
          <Typography sx={{fontWeight:'bold',fontSize:'30px',marginLeft:'1%',display:'flex',justifyContent:'center'}}>
          THE NEXT LEVEL
          </Typography>
          <Typography sx={{fontSize:'10px',marginLeft:'1%',display:'flex',justifyContent:'center'}}>
          Lorem Ipsum is simply dummy
           text of the printing and typesetting industry
          </Typography>
          <Typography  sx={{fontSize:'10px',marginLeft:'1%',display:'flex',justifyContent:'center'}}>
          Lorem Ipsum has been the industry.
          </Typography>
          </Box>
          

           <Box sx={{display:"flex",justifyContent:'center',paddingTop:'3%'}}>
          <Button sx={{
            backgroundColor:theme.palette.text.primary,color:theme.palette.text.button,
            padding :'1% 1%',
            border:1,borderRadius:2 
            ,':hover' : { 
                backgroundColor : theme.palette.text.button,
                color : theme.palette.secondary.main
            }}}
            onClick={()=> navigate('')}
            >
            <AppleIcon  sx={{marginRight:"6px"}}/>
         Download for IOS
         </Button>
          <Button sx={{marginLeft:'1%',
            backgroundColor:theme.palette.text.primary,color:theme.palette.text.button,
            padding :'1% 1%',
            border:1,borderRadius:2 
            ,':hover' : { 
                backgroundColor : theme.palette.text.button,
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
         <Box >
         <img src={frame2} style={{height:400 }} />
         
         </Box>
        
      </Fragment>
    </Suspense>
  )
}
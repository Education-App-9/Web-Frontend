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
import Mbl1 from '../assets/Main/Frame1.jpg'
import Mbl2 from '../assets/Main/Frame2.jpg'

export default function LandingPage() {
  const { isDarkMode, toggleTheme } = useThemeContext();
  const navigate = useNavigate()
const theme= useTheme()
 
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Fragment> 
          <Navbar />
         <Box sx = {{backgroundColor:theme.palette.background.landingBG}}>
         <Box sx={{display:'flex',flexDirection:'column',paddingTop:'10%',justifyContent:'center'}}>
          <Typography sx={{fontWeight:'bold',fontSize:'30px',display:'flex',justifyContent:'center', color:theme.palette.text.primary}}>
          TAKE KNOWLEDGE TO
          </Typography>
          <Typography sx={{fontWeight:'bold',fontSize:'30px',marginLeft:'1%',display:'flex',justifyContent:'center' ,color:theme.palette.text.primary}}>
          THE NEXT LEVEL
          </Typography>
          <Typography sx={{fontSize:'10px',marginLeft:'1%',display:'flex',justifyContent:'center',color:theme.palette.text.primary}}>
          Lorem Ipsum is simply dummy
           text of the printing and typesetting industry
          </Typography>
          <Typography  sx={{fontSize:'10px',marginLeft:'1%',display:'flex',justifyContent:'center',color:theme.palette.text.primary}}>
          Lorem Ipsum has been the industry.
          </Typography>
          </Box>
           <Box sx={{display:"flex",justifyContent:'center',paddingY:'3%' , }}>
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
            Download for IOS
              </Button>
              <Button sx={{marginLeft:'1%',
                backgroundColor:theme.palette.text.primary,color:theme.palette.background.default,
                padding :'1% 2%',
                border:1,borderRadius:2 
                ,':hover' : { 
                    backgroundColor : theme.palette.background.default,
                    color : theme.palette.secondary.main
                }}}
                onClick={()=> navigate('')}
                >
            Download for android
              </Button>
         </Box>
         <Box sx={{display:"flex",justifyContent:'center',paddingY:'3%' , }} >
                <img src={Mbl1} height={150} width={300} alt="Mobile Screen" />
         </Box>
         <Box sx={{display:"flex",justifyContent:'center',paddingY:'3%' , }} >
                <img src={Mbl2} height={150} width={300} alt="Mobile Screen" />
         </Box>
         </Box>
        
      </Fragment>
    </Suspense>
  )
}
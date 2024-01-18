import { Box, Button } from '@mui/material'
import React, { Fragment, Suspense, lazy, useDebugValue, useEffect, useState } from 'react'
import { getTopTeachers } from '../../Api/Landing Page/TopTeachers'
import { getTopCourses } from '../../Api/Landing Page/TopCourses'
import { useTheme } from '@emotion/react'
const Sidebar = lazy(()=>import('../Sidebar'))
const Navbar = lazy(()=> import('./Components/Navbar'))


export default function Home() {
  const handleLogout = () => {
    localStorage.removeItem("User")
    localStorage.removeItem("token")
    window.location.href = '/';
  }
  const theme = useTheme()

  const TopTeachers = async () => {
    const res = await getTopTeachers()
    console.log("Top Teachers " ,res)
  }
  const TopCourses = async () => {
    const res = await getTopCourses()
    console.log("Top Courses " ,res)
  }
  useEffect(()=>{
      TopTeachers()
      TopCourses()
      
  },[])
  return (
    <Fragment>
  <Suspense fallback={<div>loading...</div>}>
    <Box sx={{ display: 'flex' , backgroundColor : theme.palette.background.landingBG }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <div>Home</div>
        <Button onClick={handleLogout}>
          LogOut
        </Button>
      </Box>
    </Box>
  </Suspense>
</Fragment>

  )
}

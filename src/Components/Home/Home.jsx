import { Button } from '@mui/material'
import React, { Fragment, Suspense, lazy, useDebugValue, useEffect, useState } from 'react'
import { getTopTeachers } from '../../Api/Landing Page/TopTeachers'
import { getTopCourses } from '../../Api/Landing Page/TopCourses'
const Sidebar = lazy(()=>import('../Sidebar'))
export default function Home() {
  const handleLogout = () => {
    localStorage.removeItem("User")
    localStorage.removeItem("token")
    window.location.href = '/';
  }

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
        <Sidebar />
        <div>Home</div>
        <Button
          onClick={handleLogout}
        >
          LogOut
        </Button>
      </Suspense>
    </Fragment>
  )
}

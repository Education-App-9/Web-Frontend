import { Button, Typography } from '@mui/material'
import React, { Fragment, Suspense, lazy } from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = lazy(()=> import('./Navbar'))
import Toggle from 'react-toggle'
import {  useThemeContext } from '../Theme';

export default function LandingPage() {
  const { isDarkMode, toggleTheme } = useThemeContext();
  const navigate = useNavigate()
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Fragment> 
          <Navbar />
        

        
      </Fragment>
    </Suspense>
  )
}
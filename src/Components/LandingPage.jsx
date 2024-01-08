import { Button, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  const navigate = useNavigate()
  return (
    <Fragment> 
        <Button onClick={()=> navigate('/SignIn')}>
            Log In
        </Button>
    </Fragment>
  )
}
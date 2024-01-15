import { Button } from '@mui/material'
import React, { Fragment } from 'react'

export default function Home() {
  const handleLogout = () => {
    localStorage.removeItem("User")
    localStorage.removeItem("token")
    window.location.href = '/';
  }
  return (
    <Fragment>
      <div>Home</div>
      <Button
        onClick={handleLogout}
      >
        LogOut
      </Button>
    </Fragment>
  )
}

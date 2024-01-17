import { Button } from '@mui/material'
import React, { Fragment, Suspense, lazy, useEffect, useState } from 'react'
const Sidebar = lazy(()=>import('../Sidebar'))
export default function Home() {
  const handleLogout = () => {
    localStorage.removeItem("User")
    localStorage.removeItem("token")
    window.location.href = '/';
  }
  return (
    <Fragment>
    <Sidebar />
      <div>Home</div>
      <Button
        onClick={handleLogout}
      >
        LogOut
      </Button>
    </Fragment>
  )
}

import React , {Suspense ,lazy, Fragment} from 'react'
import { Route , Routes } from 'react-router-dom'
const Home = lazy(() => import("../../Components/Home/Home"));
export default function routess() {
  return (
    
    <Suspense fallback={<div>loading...</div>}>  
    <Fragment>
      <Routes>
          <Route path="/" element={<Home />}  />
      </Routes>
    </Fragment>
    </Suspense> 

    
  )
}

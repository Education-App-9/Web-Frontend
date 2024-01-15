import React , {Suspense ,lazy, Fragment} from 'react'
import { Route , Routes ,Navigate  } from 'react-router-dom'
const Home = lazy(() => import("../../Components/Home/Home"));
export default function routess() {
  return (
    
    <Suspense fallback={<div>loading...</div>}>  
    <Fragment>
      <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/SignIn" element={<Navigate to="/"  replace/>} />
      </Routes>
    </Fragment>
    </Suspense> 

    
  )
}

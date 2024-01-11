import React , {Suspense ,lazy, Fragment} from 'react'
import { Route , Routes } from 'react-router-dom'
const LandingPage = lazy(() => import("../Components/LandingPage"));
const SignIn = lazy(()=> import("../Components/Auth/SignIn"))
const SignUp = lazy(()=> import("../Components/Auth/SignUp"))
const Main1 = lazy(()=>import("../Components/Regestration/description"))
export default function routes() {
  return (
    <Suspense fallback={<div>loading...</div>}>  
          <Fragment>
            <Routes>
                <Route path="/" element={<LandingPage />}  />
                <Route path='/SignIn' element={<SignIn />}/>
                <Route path='/SignUp' element={<SignUp />}/>
                <Route path='/description' element={<Main1 />}/>
            </Routes>
         </Fragment>
      </Suspense>  
  )
}

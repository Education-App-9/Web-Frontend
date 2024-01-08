import React , {Suspense ,lazy, Fragment} from 'react'
import { Route , Routes } from 'react-router-dom'
const LandingPage = lazy(() => import("../Components/LandingPage"));
const SignIn = lazy(()=> import("../Components/Credentials/SignIn"))
export default function routes() {
  return (
    <Suspense fallback={<div>loading...</div>}>  
          <Fragment>
            <Routes>
                <Route path="/" element={<LandingPage />}  />
                <Route path='/SignIn' element={<SignIn />}/>
            </Routes>
         </Fragment>
      </Suspense>  
  )
}

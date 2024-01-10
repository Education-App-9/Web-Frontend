import Axios from "../Connection/connection";

export const Login = async( email , password)=>{
    const response = Axios.post('/auth/login' , {email , password} )
    console.log(response)
}
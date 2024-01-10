import Axios from "../Connection/connection";

export const Login = async( email , password)=>{
    const response = await Axios.post('/auth/login' , {email , password} )
    console.log(response)
}
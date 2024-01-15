import Axios from "../Connection/connection";

export const Login = async( email , password)=>{
    try {
        const response = await Axios.post('/auth/login' , {email , password} )
        console.log(response)
    } catch (error) {
        console.log(error.response.data.message)
    }
}
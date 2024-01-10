import Axios from "../Connection/connection";

export const Register = async(data)=>{
    const response = Axios.post('/auth/register' , data )
    console.log(response)
}
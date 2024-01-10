import Axios from "../Connection/connection";

export const Register = async(data)=>{
    const response = await Axios.post('/auth/register' , data )
    console.log(response)
}
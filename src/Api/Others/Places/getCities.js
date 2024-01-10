import Axios from '../../Connection/connection'

export const getCities = async(id)=>{
   const response = await Axios.get(`{{BaseURL}}/places/cities?country=${id}`)
   console.log(response)
}
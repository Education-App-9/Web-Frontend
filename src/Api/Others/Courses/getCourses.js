import Axios from '../../Connection/connection'

export const getCourses = async()=>{
   const response = await Axios.get('/public/course?page&limit&id&deleted')
   console.log(response)
}
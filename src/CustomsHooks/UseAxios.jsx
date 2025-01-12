import axios from "axios";

export const axiosSecure =axios.create({
    baseURL:'http://localhost:8000',
    
})
const UseAxios = () => {
    return axiosSecure
       
   
};

export default UseAxios;
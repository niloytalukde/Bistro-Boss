import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const FetchUser = () => {
    const {data:user,refetch}=useQuery({
        queryKey:['user'],
        queryFn: async ()=>{
            const res =await axios.get(`${import.meta.env.VITE_API}/alluser`)
            return res.data
            
        }
       
    })
    return [user,refetch]
};

export default FetchUser;
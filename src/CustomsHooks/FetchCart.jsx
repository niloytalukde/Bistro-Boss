import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "./UseAuth";


const FetchCart = () => {
  const {user}=useAuth()
   const {data :cart =[] ,refetch}=useQuery({
     queryKey:['cart'],
     queryFn: async ()=>{
const res =await axios.get(`${import.meta.env.VITE_API}/carts/${user?.email}`)


return res.data
     }
   })
   return [cart,refetch]
};

export default FetchCart;
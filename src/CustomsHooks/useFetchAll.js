import { useEffect, useState } from "react"

export const useFetchAll=()=>{
    const [menus,setMenus]=useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/menu')
        .then(res=>res.json())
        .then(data=>setMenus(data))
    },[])
   
    return menus
}
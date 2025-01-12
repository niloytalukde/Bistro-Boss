import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";


const Menu = () => {
    const [menus,setMenus]=useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>setMenus(data.filter(d=>d.category=="popular")))
    },[])
    console.log(menus);
    return (
        
        <div>
            <div className="grid md:grid-cols-2 w-[77rem] mx-auto gap-6" >
                {
menus.map(menu=><MenuItem menu={menu} key={menu._id}></MenuItem>)
                }
            </div>
            <button className="btn flex mx-auto justify-center  ">View Full  Menu</button>
        </div>
    );
};

export default Menu;
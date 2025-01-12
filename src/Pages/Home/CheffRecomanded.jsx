import React, { useEffect, useState } from 'react';
import CheffCard from './CheffCard';

const CheffRecomanded = () => {
    
        const [menus,setMenus]=useState([])
        useEffect(()=>{
            fetch('menu.json')
            .then(res=>res.json())
            .then(data=>setMenus(data.filter(d=>d.category=="popular")))
        },[])
       
        return (
            
            <div>
                <div className="grid md:grid-cols-3 grid-cols-1 w-[77rem] mx-auto gap-6 " >
                    {
    menus.map(menu=><CheffCard menu={menu} key={menu._id}></CheffCard>)
                    }
                </div>
                
            </div>
    );
};

export default CheffRecomanded;
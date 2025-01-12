import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const UserTableRow = ({data}) => {
  const {name,email,role,_id}=data|| {}
  const handelMakeAdmin=(id)=>{
console.log(id);
  }
    return (
        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
        
        <td className="p-3">
          <p>{name}</p>
          
        </td>
        <td className="p-3">
          <p>{email}</p>
          
        </td>
        <td className="p-3 ">
          {
            role=='admin'? 'Admin' :<button onClick={()=>handelMakeAdmin(_id)} className='text-xl'><FaUserCircle /></button>
          }
        </td>
        <td className="p-3 text-right">
          <button className="px-3 py-1 font-semibold rounded-md dark:bg-red-400 dark:text-gray-50">
            <span>Delete</span>
          </button>
        </td>
      </tr>
    );
};

export default UserTableRow;
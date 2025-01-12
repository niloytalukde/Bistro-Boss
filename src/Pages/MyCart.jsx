import { Link } from "react-router-dom";
import FetchCart from "../CustomsHooks/FetchCart";
import MyCartTable from "./myCartTable";


const MyCart = () => {
    const [cart]=FetchCart( )
   
const totalPrice = cart.reduce((total,item)=>total + item.price,0)

    return (
        <div className="h-[600px] ">
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Total Items {cart.length} </h2>
      <div className="overflow-x-auto w-[800px] mx-auto p-5">
        <table className="min-w-full text-xs">
          <colgroup>
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead className="dark:bg-[#d1a054] text-white">
            <tr className="text-left">
              <th className="p-3">ITEM IMAGE</th>
              <th className="p-3">ITEM NAME</th>
              <th className="p-3">PRICE</th>
              <th className="p-3">Delete</th>
              
            </tr>
          </thead>
          <tbody>
            {
                cart.map(data=><MyCartTable data={data} key={data._id}></MyCartTable>)
            }
          </tbody>
          
        </table>
        <div className="flex justify-end gap-5 mt-5">
          <button className="btn text-white bg-[#d1a054]">Total Amount ${totalPrice}</button>
        {cart.length?<Link to={'/dashboard/payment'}><button className="btn text-white bg-[#d1a054]"> Pay Now </button></Link>:<button disabled className="btn text-white bg-[#d1a054]"> Pay Now </button>}
          </div>
      </div>
    </div>
        </div>
    );
};

export default MyCart;
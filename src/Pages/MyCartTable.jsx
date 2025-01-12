import toast from "react-hot-toast";
import { RiDeleteBin2Fill } from "react-icons/ri";

const MyCartTable = ({ data }) => {
  const { price, image, name, _id } = data || {};
  const handelDelete = (deleteId) => {
   
  };


  const handelOnModal=(id)=>{
    console.log(id);
    toast(
        (t) => (
          <div>
            <button onClick={() => handelDelete (id)}>Delete</button>
            <button onClick={() => toast.dismiss(t.id)}>Dismiss</button>
          </div>
        ),
        
      );
  }

  return (
    <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
      <td className="p-3">
        <img className="w-20 h-20" src={image} alt="" />
      </td>
      <td className="p-3">
        <p className="text-xl font-semibold ">{name}</p>
      </td>
      <td className="p-3">
        <p className="text-xl font-semibold">{price} $</p>
      </td>
      <td className="p-3">
        <button
          onClick={() => handelOnModal(_id)}
          className="text-2xl text-red-400"
        >
          <RiDeleteBin2Fill />
        </button>
      </td>
    </tr>
  );
};

export default MyCartTable;

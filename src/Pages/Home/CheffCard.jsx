import toast from "react-hot-toast";
import { useAuth } from "../../CustomsHooks/UseAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FetchCart from "../../CustomsHooks/FetchCart";

const CheffCard = ({ menu }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [,refetch]=FetchCart()
  const { image, name, recipe, price,_id} = menu || {};
  // Added Cart Data
  const handelCart = async (food) => {
    if (user && user.email) {
      // if user to save cart data in db
const cartItem={
	menuId:_id,
	email:user.email,
	name,image,price
}
const {data}= await axios.post(`${import.meta.env.VITE_API}/carts`,cartItem)
toast.success('Add to Cart Successful')
refetch()
    } else {
      toast.error("Please Login First");
      navigate("/login");
    }
  };
  return (
    <div className="md:max-w-md rounded-md shadow-md bg-white  text-black">
      <img
        src={image}
        alt=""
        className="object-cover object-center md:w-full rounded-t-md md:h-72 bg-gray-500"
      />
      <div className="md:flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
          <p className="text-black">{recipe}</p>
        </div>
        <button
          onClick={() => handelCart({ menu })}
          type="button"
          className="md:flex items-center justify-center  p-3 font-semibold tracking-wide rounded-md btn text-yellow-600 border-b-4 border-yellow-600 hover:bg-black"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default CheffCard;


import { Link } from 'react-router-dom';

const UserRoute = () => {
    return (
        <div className="flex ">
        <ul className="pt-2 pb-4 space-y-10 p-5 text-lg text-white  justify-center ">
          <li className="rounded-sm ">
            <Link className="flex " to={"userhome"}> USER HOME</Link>
          </li>
          <li className="rounded-sm">
            <Link  className='uppercase' to={"reservation"}>reservation</Link>
          </li>
          <li className="rounded-sm">
            <Link  className='uppercase' to={"payment"}>Payment</Link>
          </li>
          <li className="rounded-sm">
            <Link to={"paymenthistory"}>PAYMENT HISTORY</Link>
          </li>
          <li className="rounded-sm">
            <Link to={"addreview"}>ADD REVIEW</Link>
          </li>
          <li className="rounded-sm">
            <Link to={"mybooking"}>MY BOOKING</Link>
          </li>
         <p className="divider w-full text-white"></p>
          <li className="rounded-sm dark:bg-gray-100 dark:text-gray-900"></li>
          <li className="rounded-sm"><Link to={'/'}>Home</Link></li>
          <li className="rounded-sm"><Link>Contact Us</Link></li>
          <li className="rounded-sm"><Link>Dashboard</Link></li>
          <li className="rounded-sm"><Link to={"/ourMenu"}>Our Menu</Link></li>
          <li className="rounded-sm"><Link to={"/ourShop"}>Our Shop</Link></li>
        </ul>
      </div>
    );
};

export default UserRoute;
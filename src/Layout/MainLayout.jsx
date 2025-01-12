import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/fOOTER.JSX";

const MainLayout = () => {
  return (
    <div>
      {/* Nav Bar start here */}
      <NavBar></NavBar>
      {/* Nav Bar End here */}

      {/* Daynamic Layout Start here */}
      <Outlet></Outlet>
      {/* Daynamic Layout End here */}

      {/* Footer start here  */}
      <Footer></Footer>
      {/* Footer End  here  */}
    </div>
  );
};

export default MainLayout;

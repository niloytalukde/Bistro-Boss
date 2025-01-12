import bg1 from "../../assets/shop/banner2.jpg";

import ReUseOurMenu from "../../SharedComponents/ReUseOurMenu";
import Tabitem from "./Tabitem";

import Tab from "./Tabitem";
const MainOurShop = () => {
  return (
    <div>
      {/* banner  */}
      <ReUseOurMenu
        image={bg1}
        title={"OUR SHOP"}
        subTitle={"Best Food Best Service"}
      ></ReUseOurMenu>
      {/* banner end  */}
      {/* Tab  */}
      <Tabitem></Tabitem>
      {/* Tab end */}
    </div>
  );
};

export default MainOurShop;

import MainTitle from "../../Components/MainTitle";
import ReUseOurMenu from "../../SharedComponents/ReUseOurMenu";
import img1 from "../../assets/menu/banner3.jpg";
import Desserts from "./Desserts";
import Pizza from "./Pizza";
import Salads from "./Salads";
import Soups from "./Soups";
import TodayOffer from "./TodayOffer";

const MainOurMenu = () => {
  return (
    <div className="">
      <MainTitle heading={'OUR MENU'}></MainTitle>
      <ReUseOurMenu
        image={img1}
        title={"OUR MENU"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, "
        }
      ></ReUseOurMenu>
      <TodayOffer></TodayOffer>
      {/* Desserts section  */}
      <Desserts></Desserts>
      {/* pizza Section  */}
      <Pizza></Pizza>
      {/* Salads  */}
      <Salads></Salads>
      {/* Soups  */}
      <Soups></Soups>
    </div>
  );
};

export default MainOurMenu;

import Banner from "./Banner";
import Call from "./Call";
import CheffRecomanded from "./CheffRecomanded";
import Food from "./Food";
import OurMenue from "./OurMenue";
import Testimonials from "./Testimonials";
import Title from "../../SharedComponents/Title"
import Background from "./Background";
import Menu from "./Menu";
import MainTitle from "../../Components/MainTitle";

const Home = () => {
  return (
    <div>
    <MainTitle heading={'HOME'}></MainTitle>
    <Banner ></Banner>
    <Title subTitle={'---From 11:00am to 10:00pm---'} title={'ORDER ONLINE'}></Title>
    <Food></Food>
    <Background></Background>
    <Title subTitle={'---Check it out---'} title={'FROM OUR MENU'}></Title>
   <Menu></Menu>
    <Call></Call>
    <Title subTitle={'---Should Try---'} title={'CHEF RECOMMENDS'}></Title>
    <CheffRecomanded></CheffRecomanded>
    <OurMenue></OurMenue>
    <Title subTitle={'---What Our Clients Say---'} title={'TESTIMONIALS'}></Title>
    <Testimonials></Testimonials>
    </div>
  )
};

export default Home;

import { useFetchAll } from "../../CustomsHooks/useFetchAll";
import ReUseOurMenu from "../../SharedComponents/ReUseOurMenu";
import img1 from '../../assets/menu/dessert-bg.jpeg'

const Desserts = () => {
    const data =useFetchAll()
    
    const filterData =data.slice(4,10)
    return (
        <div className="mt-10">
            <ReUseOurMenu image={img1} title={'DESSERTS'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, '}></ReUseOurMenu>
            <div className="grid md:grid-cols-2 w-[77rem] mx-auto gap-6  mt-10">
                {
                    filterData.map(data=><div  className="flex items-center gap-5 py-5">
                        <div>
                            <img style={{borderRadius:'0 200px 200px 200px' }} className="w-[120px]  " src={data.image} alt="" />
                        </div>
                        <div>
                            <h3 className=" uppercase">{data.name}---------------</h3>
                            <p>{data.recipe}</p>
                        </div>
                        <p className="text-yellow-600">${data.price}</p>
                    </div>)
                }
            </div>
            <button className="btn border-b-4 border-black flex  mx-auto hover:bg-black text-yellow-600">ORDER YOUR FAVOURITE FOOD</button>
        </div>
    );
};

export default Desserts;
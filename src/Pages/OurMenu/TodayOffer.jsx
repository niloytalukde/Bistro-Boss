import { useFetchAll } from "../../CustomsHooks/useFetchAll";
import Title from "../../SharedComponents/Title";



const TodayOffer = () => {
const data =useFetchAll()

const filterData =data.slice(0,4)

    return (
        
        <div>
            <Title subTitle={'---Dont miss---' } title={'TODAYS OFFER'}></Title>
            <div className="grid md:grid-cols-2 w-[77rem] mx-auto gap-6">
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

export default TodayOffer;
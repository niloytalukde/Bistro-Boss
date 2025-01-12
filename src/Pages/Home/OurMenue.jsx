
import bg1 from '../../assets/home/featured.jpg'
const OurMenue = () => {
    return (
        <div className="relative bg-cover bg-center h-[500px] text-white bg-[url('../../assets/home/featured.jpg')] mt-20">
        {/* Overlay for darker background */}
        <div className="absolute inset-0 bg-black/50"></div>
  
        {/* Content */}
        <div className="relative flex items-center justify-center h-full px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl">
            {/* Image Section */}
            <div className="rounded-md overflow-hidden">
              <img src={bg1} alt="Food" className="w-full h-auto" />
            </div>
  
            {/* Text Section */}
            <div>
              <p className="text-yellow-500 text-sm italic">---Check it out---</p>
              <h2 className="text-4xl font-bold mt-2">FROM OUR MENU</h2>
              <p className="text-gray-300 mt-4">
                March 20, 2023
                <br />
                <strong>WHERE CAN I GET SOME?</strong>
              </p>
              <p className="text-gray-300 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi.
                Ea cupiditate recusandae ad laudantium tempore consequuntur omnis ullam maxime tenetur.
              </p>
              <button className="mt-6 px-6 py-2 bg-transparent border border-white text-white hover:bg-white hover:text-black transition duration-300">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default OurMenue;
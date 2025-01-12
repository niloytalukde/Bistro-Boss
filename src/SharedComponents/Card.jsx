

const Card = ({data}) => {
    const {image,name,recipe,}=data||{}
    return (
        <div className="md:max-w-md rounded-md shadow-md bg-white  text-black  ">
        <img src={image} alt="" className="object-cover object-center md:w-full rounded-t-md md:h-72 bg-gray-500" />
        <div className="md:flex flex-col justify-between md:p-6 md:space-y-8">
            <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                <p className="text-black">{recipe}</p>
            </div>
            <div className="flex">
            <button type="button" className="md:flex flex-grow  items-center justify-center  p-3 font-semibold tracking-wide rounded-md btn text-yellow-600 border-b-4 border-yellow-600 hover:bg-black">ADD TO CART</button>
            </div>
        </div>
    </div>
    );
};

export default Card;
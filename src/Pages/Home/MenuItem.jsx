
const MenuItem = ({menu}) => {
    const {image,price,recipe,name}=menu
    return (
        <div className="md:flex items-center gap-5 py-5">
            <div>
                <img style={{borderRadius:'0 200px 200px 200px' }} className="w-[120px]  " src={image} alt="" />
            </div>
            <div>
                <h3 className=" uppercase">{name}---------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuItem;
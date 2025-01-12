

const ReUseOurMenu = ({image, title, subTitle}) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="md:h-[35rem] h-[20rem]    flex items-center">
      <div className="bg-black/35 mx-auto  md:h-[14rem] md:w-[60rem] justify-center flex items-center ">
        <div className=" text-center font-semibold text-white">
          <h1 className="text-6xl">{title}</h1>
          <p>{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default ReUseOurMenu;

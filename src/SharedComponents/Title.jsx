import React from "react";

const Title = ({ subTitle, title }) => {
  return (
    <div className="text-center my-6 ">
      <p className="text-yellow-500 italic text-sm">{subTitle}</p>

      <h2 className="text-lg font-bold w-[300px] mt-5 p-3 justify-center flex mx-auto border-t-4 border-b-4">{title}</h2>
    </div>
  );
};

export default Title;

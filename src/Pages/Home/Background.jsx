
const Background = () => {
    return (
        
           <div className="relative bg-cover bg-center  bg-[url('./assets/home/chef-service.jpg')]  w-[77rem] mx-auto h-[30rem]">
      {/* White Box */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-md p-6 max-w-3xl text-center">
          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4">BISTRO BOSS</h2>
          {/* Description */}
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus
            laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore
            at, nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
        
    );
};

export default Background;
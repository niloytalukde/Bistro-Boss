

const AdminHome = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Hi, Welcome Back!</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { title: 'Revenue', value: '1000', color: 'bg-purple-200' },
          { title: 'Customers', value: '1500', color: 'bg-yellow-200' },
          { title: 'Products', value: '103', color: 'bg-pink-200' },
          { title: 'Orders', value: '500', color: 'bg-blue-200' },
        ].map((card, index) => (
          <div
            key={index}
            className={`rounded-lg p-4 ${card.color} shadow-md`}
          >
            <p className="text-lg font-semibold">{card.value}</p>
            <p className="text-gray-700">{card.title}</p>
          </div>
        ))}
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Sales by Category</h2>
          <div className="flex items-end space-x-4">
            {[
              { label: 'Dessert', value: 30, color: 'bg-blue-400' },
              { label: 'Pizza', value: 35, color: 'bg-orange-400' },
              { label: 'Salad', value: 20, color: 'bg-green-400' },
              { label: 'Soup', value: 25, color: 'bg-red-400' },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  style={{ height: `${item.value * 10}px` }}
                  className={`${item.color} w-8 rounded-t-lg`}
                ></div>
                <p className="text-sm mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Sales Distribution</h2>
          <div className="relative w-40 h-40 mx-auto">
            <svg viewBox="0 0 32 32" className="w-full h-full">
              <circle
                r="16"
                cx="16"
                cy="16"
                className="fill-transparent stroke-blue-400 stroke-[4]"
                strokeDasharray="100"
                strokeDashoffset="79"
              ></circle>
              <circle
                r="16"
                cx="16"
                cy="16"
                className="fill-transparent stroke-orange-400 stroke-[4]"
                strokeDasharray="100"
                strokeDashoffset="59"
              ></circle>
              <circle
                r="16"
                cx="16"
                cy="16"
                className="fill-transparent stroke-green-400 stroke-[4]"
                strokeDasharray="100"
                strokeDashoffset="31"
              ></circle>
            </svg>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-400 mr-2"></div>
              <p>Dessert</p>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-orange-400 mr-2"></div>
              <p>Pizza</p>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-400 mr-2"></div>
              <p>Salad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AdminHome;
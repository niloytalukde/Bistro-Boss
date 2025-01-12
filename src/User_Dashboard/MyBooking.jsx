

const MyBooking = () => {
    return (
        <div className="max-w-4xl mx-auto mt-10 bg-gray-50 shadow-lg p-6 rounded-md">
      <h2 className="text-center text-2xl font-semibold text-gray-700">
        My Bookings
      </h2>
      <p className="text-center text-sm text-gray-500 my-2">
        <span className="text-orange-500 font-bold">--- Excellent Ambience ---</span>
      </p>
      <div className="flex justify-between items-center my-6">
        <p className="text-lg font-medium text-gray-600">
          Total Bookings: 
        </p>
        <p className="text-lg font-medium text-gray-600">
          Total Price: $
        </p>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
          Pay
        </button>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-orange-500 text-white">
            <th className="p-3">Item Image</th>
            <th className="p-3">Guest Number</th>
            <th className="p-3">Category</th>
            <th className="p-3">Price</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          
            <tr
              
              className="border-b hover:bg-gray-100 transition"
            >
              <td className="p-3">
                <div className="w-16 h-16 bg-gray-300 rounded-md"></div>
              </td>
              <td className="p-3">guests guest</td>
              <td className="p-3">category</td>
              <td className="p-3">price</td>
              <td className="p-3">
                <button
                 
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
         
        </tbody>
      </table>
    </div>
    );
};

export default MyBooking;
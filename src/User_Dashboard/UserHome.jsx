

const UserHome = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Hi, Welcome Back!</h1>
      {/* Top Section */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-purple-500 text-white flex flex-col items-center justify-center p-4 rounded-md shadow-md">
          <p className="text-3xl font-bold">205</p>
          <p className="text-lg">Menu</p>
        </div>
        <div className="bg-yellow-500 text-white flex flex-col items-center justify-center p-4 rounded-md shadow-md">
          <p className="text-3xl font-bold">103</p>
          <p className="text-lg">Shop</p>
        </div>
        <div className="bg-pink-500 text-white flex flex-col items-center justify-center p-4 rounded-md shadow-md">
          <p className="text-3xl font-bold">03</p>
          <p className="text-lg">Contact</p>
        </div>
      </div>
      {/* Main Content */}
      <div className="grid grid-cols-2 gap-4">
        {/* Profile Section */}
        <div className="bg-orange-100 p-6 rounded-md shadow-md flex flex-col items-center">
          <div className="w-24 h-24 bg-white rounded-full mb-4"></div>
          <p className="text-xl font-bold">Awlad Hossain</p>
        </div>
        {/* Activity Section */}
        <div className="bg-yellow-100 p-6 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4">Your Activities</h2>
          <ul className="space-y-2">
            <li className="text-blue-500 font-semibold">🛒 Orders: 6</li>
            <li className="text-green-500 font-semibold">⭐ Reviews: 2</li>
            <li className="text-orange-500 font-semibold">📅 Bookings: 1</li>
            <li className="text-red-500 font-semibold">💳 Payment: 3</li>
          </ul>
        </div>
      </div>
    </div>
    );
};

export default UserHome;
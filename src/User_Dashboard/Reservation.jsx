

const Reservation = () => {
    return (
        <main className="w-3/4 p-10">
                {/* Reservation Section */}
                <div>
                  <h2 className="text-center text-lg font-semibold text-yellow-700 mb-3">---Reservation---</h2>
                  <h1 className="text-center text-3xl font-bold mb-8">BOOK A TABLE</h1>
                  <form className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 font-medium">Date*</label>
                      <input
                        type="date"
                        className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-yellow-300"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">Time*</label>
                      <input
                        type="time"
                        className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-yellow-300"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">Guest*</label>
                      <select
                        className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-yellow-300"
                      >
                        <option>1 Person</option>
                        <option>2 People</option>
                        <option>3 People</option>
                        <option>4 People</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">Name*</label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-yellow-300"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">Phone*</label>
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-yellow-300"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">Email*</label>
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-yellow-300"
                      />
                    </div>
                    <div className="col-span-2 text-center">
                      <button
                        type="submit"
                        className="bg-yellow-700 text-white py-2 px-5 rounded-lg hover:bg-yellow-800"
                      >
                        Book A Table
                      </button>
                    </div>
                  </form>
                </div>
        
                {/* Location Section */}
                <div className="mt-16">
                  <h2 className="text-center text-lg font-semibold text-yellow-700 mb-3">---Visit Us---</h2>
                  <h1 className="text-center text-3xl font-bold mb-8">OUR LOCATION</h1>
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl mb-2">📞</div>
                      <h3 className="font-bold text-lg">PHONE</h3>
                      <p>+38 (012) 34 56 789</p>
                    </div>
                    <div>
                      <div className="text-2xl mb-2">📍</div>
                      <h3 className="font-bold text-lg">ADDRESS</h3>
                      <p>+38 (012) 34 56 789</p>
                    </div>
                    <div>
                      <div className="text-2xl mb-2">⏰</div>
                      <h3 className="font-bold text-lg">WORKING HOURS</h3>
                      <p>Mon - Fri: 08:00 - 22:00</p>
                      <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                  </div>
                </div>
              </main>
            
        
             
              
    )
};

export default Reservation;
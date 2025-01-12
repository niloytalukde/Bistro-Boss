

const PaymentHistory = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-center text-2xl font-bold mb-4">
            ---At a Glance!---
          </h2>
          <h1 className="text-center text-3xl font-bold mb-8">PAYMENT HISTORY</h1>
          <div>
            <h3 className="text-xl font-bold mb-4">Total Payments: </h3>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-yellow-500 text-white text-left">
                    <th className="px-4 py-2">EMAIL</th>
                    <th className="px-4 py-2">CATEGORY</th>
                    <th className="px-4 py-2">TOTAL PRICE</th>
                    <th className="px-4 py-2">PAYMENT DATE</th>
                  </tr>
                </thead>
                <tbody>
              
                    <tr
                      
                    >
                      <td className="px-4 py-2 border">email</td>
                      <td className="px-4 py-2 border">category</td>
                      <td className="px-4 py-2 border">totalPrice</td>
                      <td className="px-4 py-2 border">date</td>
                    </tr>
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PaymentHistory;
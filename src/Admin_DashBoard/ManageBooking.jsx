import ManageBookingTableRow from "./ManageBookingTableRow";


const ManageBooking = () => {
    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Manage Booking </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead className="dark:bg-[#d1a054] text-white">
            <tr className="text-left">
              <th className="p-3">Invoice </th>
              <th className="p-3">Client</th>
              <th className="p-3">Issued</th>
              <th className="p-3">Due</th>
              <th className="p-3 text-right">Amount</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <ManageBookingTableRow></ManageBookingTableRow>
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default ManageBooking;
import FetchUser from "../CustomsHooks/FetchUser";
import UserTableRow from "./UserTableRow";

const AllUsers = () => {
  const [user]=FetchUser()
  
    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">All User </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead className="dark:bg-[#d1a054] text-white">
            <tr className="text-left">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Action</th>
             
            </tr>
          </thead>
          <tbody>
           {
            user?.map(data=> <UserTableRow data={data} key={data._id}></UserTableRow>)
           }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default AllUsers;
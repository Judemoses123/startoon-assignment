import { useEffect, useState } from "react";
import { getUser } from "../../utils/getUser";
import { getUsers } from "../../utils/getUsers";

const UserDisplay = (props: any) => {
  // const [users, setUsers] = useState([
  //   {
  //     srno: "1",
  //     name: "Ravi Kumar",
  //     email: "ravikumar123@gmail.com",
  //     count: "18",
  //     lastLoginDate: "07th Jun 2024",
  //   },
  //   {
  //     srno: "2",
  //     name: "Anjali Sharma",
  //     email: "anjali.sharma@gmail.com",
  //     count: "29",
  //     lastLoginDate: "03rd Jun 2024",
  //   },
  //   {
  //     srno: "3",
  //     name: "Vikram Singh",
  //     email: "vikramsingh@gmail.com",
  //     count: "13",
  //     lastLoginDate: "01st Jun 2024",
  //   },
  //   {
  //     srno: "4",
  //     name: "Priya Iyer",
  //     email: "priya.iyer@gmail.com",
  //     count: "22",
  //     lastLoginDate: "05th Jun 2024",
  //   },
  //   {
  //     srno: "5",
  //     name: "Arjun Verma",
  //     email: "arjun.verma@gmail.com",
  //     count: "15",
  //     lastLoginDate: "02nd Jun 2024",
  //   },
  //   {
  //     srno: "6",
  //     name: "Sneha Desai",
  //     email: "sneha.desai@gmail.com",
  //     count: "27",
  //     lastLoginDate: "06th Jun 2024",
  //   },
  //   {
  //     srno: "7",
  //     name: "Rahul Gupta",
  //     email: "rahul.gupta@gmail.com",
  //     count: "19",
  //     lastLoginDate: "04th Jun 2024",
  //   },
  // ]);
  const users = props.users;
  return (
    <div className="w-full md:w-3/4">
      <div className=" grid grid-cols-11 w-full m-auto  border-2 bg-blue-400">
        <div className=" col-span-1 border pl-2">Sr. No</div>
        <div className=" col-span-3 border pl-2">Name</div>
        <div className=" col-span-3 border pl-2">Email</div>
        <div className=" col-span-1 border pl-2">Count</div>
        <div className=" col-span-3 border pl-2">Last Login Date</div>
      </div>
      <div>
        {users.map((user: any, index: number) => {
          return (
            <div className=" grid grid-cols-11 w-full m-auto  border-2">
              <div className=" col-span-1 border pl-2">{index + 1}</div>
              <div className=" col-span-3 border pl-2">{user.name}</div>
              <div className=" col-span-3 border pl-2">{user.email}</div>
              <div className=" col-span-1 border pl-2">{user.count}</div>
              <div className=" col-span-3 border pl-2">
                {new Date(user.lastLoginDate).toDateString()}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default UserDisplay;

import { useEffect, useState } from "react";
import Navbar from "../components/navigationComponents/Navbar";
import UserDisplay from "../components/userComponents/UserDisplay";
import { getUser } from "../utils/getUser";
import { getUsers } from "../utils/getUsers";
import UserSection from "../components/userComponents/UserSection";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function asyncFunction() {
      const response = await getUser();
      console.log(response);
      if (!response) return;
      if (response.status != "success") return;
      setName(response.user.name);
      setEmail(response.user.email);
      setGender(response.user.gender);
      setRole(response.user.role);

      if (response.user.role === "admin") {
        const usersResponse = await getUsers();
        console.log(usersResponse);
        if (!usersResponse || usersResponse.status == "failed") return;
        setUsers(usersResponse.users);
      }
    }
    asyncFunction();
  }, []);
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-stretch">
      <Navbar />
      <main className="w-full bg-white pt-10 h-full flex items-center flex-col ">
        {role == "user" && (
          <UserSection name={name} email={email} gender={gender} role={role} />
        )}
        {role == "admin" && <UserDisplay users={users} />}
      </main>
    </div>
  );
};
export default Dashboard;

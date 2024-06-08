import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-2 border-b w-full flex flex-row items-center gap-16 bg-sky-200">
      <span className="font-semibold text-xl">Dashboard</span>
      <ul className="flex flex-row gap-4 w-full justify-between">
        <div className="flex items-center justify-start gap-4">
          <NavLink className={"underline"} to={"/dashboard"}>
            Dashboard
          </NavLink>
          <NavLink className={"underline"} to={"/graph"}>
            Graph
          </NavLink>
        </div>
      </ul>
    </nav>
  );
};
export default Navbar;

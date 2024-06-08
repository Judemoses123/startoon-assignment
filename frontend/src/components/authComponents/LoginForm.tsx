import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { login } from "../../utils/login";
import { useState } from "react";
import user from "../../types/user";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginFunction = async () => {
    const loginData = { name, email, password };
    const loginResponse = await login(loginData);
    console.log(loginResponse);
    if (!!!loginResponse) return;
    if (loginResponse.status === "failed") return;
    localStorage.setItem("token", loginResponse.token);
    navigate("/dashboard");
  };

  return (
    <form className="flex flex-col gap-4 items-start justify-center w-2/3">
      <div className="text-2xl font-semibold text-blue-900">
        Login With Email ID
      </div>
      <input
        type="text"
        id="name"
        className="border w-full p-1 rounded-md"
        placeholder="Name"
        onInput={(e) => setName(e.currentTarget.value)}
      />
      <input
        type="text"
        id="emailId"
        className="border w-full p-1 rounded-md"
        placeholder="Email Id"
        onInput={(e) => setEmail(e.currentTarget.value)}
      />
      <input
        type="password"
        id="password"
        className="border w-full p-1 rounded-md"
        placeholder="Password"
        onInput={(e) => setPassword(e.currentTarget.value)}
      />
      <button
        onClick={loginFunction}
        type="button"
        className="bg-blue-500 w-full p-2 rounded-md"
      >
        Login
      </button>
      <NavLink to={"/signup"}>Don't have an account? Signup</NavLink>
    </form>
  );
};

export default LoginForm;

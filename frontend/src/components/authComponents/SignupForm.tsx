import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signup } from "../../utils/signup";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  const signupFunction = async () => {
    const signupData = { name, email, password, gender };
    const signupResponse = await signup(signupData);
    console.log(signupResponse);
    if (!!!signupResponse) return;
    if (signupResponse.status === "failed") return;
    localStorage.setItem("token", signupResponse.token);
    navigate("/dashboard");
  };
  return (
    <form className="flex flex-col gap-4 items-start justify-center w-2/3">
      <div className="text-2xl font-semibold text-blue-900">
        Signup With Email ID
      </div>
      <input
        onInput={(e) => setName(e.currentTarget.value)}
        type="text"
        id="name"
        className="border w-full p-1 rounded-md"
        placeholder="Name"
      />
      <input
        onInput={(e) => setEmail(e.currentTarget.value)}
        type="text"
        id="emailId"
        className="border w-full p-1 rounded-md"
        placeholder="Email Id"
      />
      <input
        onInput={(e) => setPassword(e.currentTarget.value)}
        type="text"
        id="password"
        className="border w-full p-1 rounded-md"
        placeholder="Password"
      />
      <label htmlFor="gender">Gender</label>
      <label className="flex gap-2">
        <input
          onInput={(e) => setGender(e.currentTarget.value)}
          type="radio"
          name="gender"
          id="gender"
          value="male"
        />
        Male
      </label>
      <label className="flex gap-2">
        <input
          onInput={(e) => setGender(e.currentTarget.value)}
          type="radio"
          name="gender"
          id="gender"
          value="female"
        />
        Female
      </label>
      <button
        onClick={signupFunction}
        type="button"
        className="bg-blue-500 w-full p-2 rounded-md"
      >
        Signup
      </button>
      <NavLink to={"/"}>Already Have an account? Login</NavLink>
    </form>
  );
};

export default SignupForm;

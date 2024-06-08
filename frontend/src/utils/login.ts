import user from "../types/user";

export const login = async (loginData: user) => {
  try {
    const name = loginData.name;
    const email = loginData.email;
    const password = loginData.password;
    console.log(name, email, password);
    console.log(`${process.env.REACT_APP_BACKEND_URI}/login`);
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URI}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

import user from "../types/user";

export const login = async (loginData: user) => {
  try {
    const name = loginData.name;
    const email = loginData.email;
    const password = loginData.password;
    console.log(name, email, password);
    const response = await fetch("http://localhost:8080/api/login", {
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

import user from "../types/user";

export const signup = async (loginData: user) => {
  try {
    const { name, email, password, gender } = loginData;

    console.log(name, email, password, gender);
    const response = await fetch("http://localhost:8080/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        gender: gender,
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

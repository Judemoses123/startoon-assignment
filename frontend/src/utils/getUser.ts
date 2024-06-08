export const getUser = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:8080/api/user/getUser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

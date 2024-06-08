export const getMonthlyLogin = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URI}/admin/getMonthlyLogin`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    );

    const data = await response.json();
    console.log(data);

    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

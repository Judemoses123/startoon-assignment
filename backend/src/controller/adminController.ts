import Login from "../model/login";
import User from "../model/user";

export const checkAdmin = (req: any, res: any, next: any) => {
  if (req.user.role !== "admin") {
    return res.status({ message: "Unauthorized endpoint", status: "failed" });
  }
  next();
};
export const getUsers = async (req: any, res: any, next: any) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    if (!user)
      return res
        .status(401)
        .json({ message: "Invalid user", status: "failed" });

    if (user.role == "user") {
      return res
        .status(401)
        .json({ message: "Access Denied", status: "failed" });
    }

    const users = await User.find({ role: "user" }).select([
      "name",
      "email",
      "count",
      "lastLoginDate",
    ]);
    return res.json({
      users,
      message: "users fetched successfully",
      status: "success",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "something went wrong",
      status: "failed",
    });
  }
};
export const getMonthlyLogin = async (req: any, res: any, next: any) => {
  try {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    let searchArray: String[] = [];

    // Constructing search parameters for the past 6 months
    for (let i = 0; i < 6; i++) {
      let searchMonth = month - i;
      let searchYear = year;
      if (searchMonth < 0) {
        searchMonth += 12;
        searchYear -= 1;
      }
      searchArray.push(`${searchMonth + 1}/${searchYear}`); // month is 0-indexed
    }

    // Preparing an answer array
    const monthlyLogin = [];

    // Searching in DB
    for (let i = 0; i < searchArray.length; i++) {
      const monthYear = searchArray[i];
      const login = await Login.findOne({ month_year: monthYear });
      const count = login?.count || 0;
      monthlyLogin.push({ month: monthYear, count: count });
    }
    console.log(monthlyLogin);
    return res.status(200).json({
      message: "Monthly login count fetched successfully",
      status: "success",
      monthlyLogin: monthlyLogin,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      status: "failed",
    });
  }
};

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";

const UserSection = (props: any) => {
  return (
    <div className="m-auto w-3/4 md:w-1/3">
      <div className="text-3xl text-blue-700 font-semibold m-auto text-center ">
        Welcome {props.name}
      </div>
      <div
        className="w-full
          flex flex-col items-center justify-evenly p-2 border-b text-blue-700 border shadow-lg mt-10"
      >
        <div className="flex flex-col mb-5 f gap-1 items-center">
          <AccountCircleIcon style={{ fontSize: "100px" }} />
          <span className="font-semibold">{props.name}</span>
        </div>
        <div className="flex flex-row gap-4 justify-between border-t w-full p-2 pt-4">
          <div className="flex f gap-1 items-center justify-center">
            <EmailIcon />
            <span>{props.email}</span>
          </div>
          <div className="flex f gap-1 items-center justify-center">
            {props.gender == "male" ? <ManIcon /> : <WomanIcon />}
            <span>{props.gender}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserSection;

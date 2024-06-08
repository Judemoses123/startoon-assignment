import FormContainer from "../components/authComponents/FormContainer";
import LoginForm from "../components/authComponents/LoginForm";

const Homepage = () => {
  return (
    <div className="w-screen h-screen grid grid-rows-3 md:grid-cols-2">
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </div>
  );
};
export default Homepage;

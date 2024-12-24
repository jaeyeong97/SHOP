import { GoogleLogin } from "@react-oauth/google";

const GoogleLoginComponent = ({ onSuccess }) => {
  const isLoginPage = window.location.pathname === "/login-page";
  if (!isLoginPage) {
    return null;
  }

  return (
    <GoogleLogin
      onSuccess={onSuccess}
      type="icon"
      shape="circle"
    />
  );
};

export default GoogleLoginComponent;

import { GoogleLogin } from "@react-oauth/google";

const GoogleLoginComponent = ({ onSuccess }) => {
  return (
    <GoogleLogin
      onSuccess={onSuccess}
      type="icon"
      shape="circle"
    />
  );
};

export default GoogleLoginComponent;

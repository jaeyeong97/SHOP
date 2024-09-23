import { GoogleLogin } from "@react-oauth/google";

const GoogleLoginComponent = ({ onSuccess, onFailure }) => {
    return (
        <GoogleLogin
            onSuccess={onSuccess}
            onError={onFailure}
            type="icon"
            shape="circle"
        />
    );
};

export default GoogleLoginComponent;

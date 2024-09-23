import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const nickname = localStorage.getItem("nickname");

    if (!nickname) {
        return <Navigate to="/login-page" />;
    }

    return children;
};

export default PrivateRoute;

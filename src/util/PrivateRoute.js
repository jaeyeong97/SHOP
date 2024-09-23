import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const email = localStorage.getItem("email");

    if (!email) {
        return <Navigate to="/login-page" />;
    }

    return children;
};

export default PrivateRoute;

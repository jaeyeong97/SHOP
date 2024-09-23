import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "../styles/loginPage.scss";
import KakaoLogin from "./KakaoLogin";
import GoogleLoginComponent from "./GoogleLoginComponent";
import NaverLogin from "./NaverLogin";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleKakaoSuccess = (kakaoAccount) => {
    localStorage.setItem("email", kakaoAccount.email);
    localStorage.setItem("nickname", kakaoAccount.nickname);
    localStorage.setItem("profileImg", kakaoAccount.profileImg);
    navigate("/my-page");
  };

  const handleGoogleSuccess = (response) => {
    const decoded = jwtDecode(response.credential);
    localStorage.setItem("email", decoded.email);
    localStorage.setItem("nickname", decoded.name);
    localStorage.setItem("profileImg", decoded.picture);
    navigate("/my-page");
  };

  const handleNaverSuccess = (naverAccount) => {
    localStorage.setItem("email", naverAccount.email);
    localStorage.setItem("nickname", naverAccount.nickname);
    localStorage.setItem("profileImg", naverAccount.profileImg);
    navigate("/my-page");
  };


  return (
    <section id="login-page">
      <div className="logo-wrap">
        <div className="logo-txt">SHOP</div>
        <div className="logo">
          <img src="../assets/logo.png" alt="로고 이미지" />
        </div>
      </div>
      <div className="login-btns">
        <KakaoLogin onSuccess={handleKakaoSuccess} />
        <div className="or">또는</div>
        <div className="circle-logo-wrap">
          <GoogleLoginComponent
            onSuccess={handleGoogleSuccess}
          />
          <NaverLogin onSuccess={handleNaverSuccess} />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;

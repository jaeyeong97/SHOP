import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "../styles/loginPage.scss";
import KakaoLogin from "./KakaoLogin";
import GoogleLoginComponent from "./GoogleLoginComponent";
import NaverLogin from "./NaverLogin";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (email, nickname, profileImg) => {
    localStorage.setItem("email", email);
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("profileImg", profileImg);
    navigate("/my-page");
  };

  const handleKakaoSuccess = (kakaoAccount) => {
    handleLoginSuccess(kakaoAccount.email, kakaoAccount.nickname, kakaoAccount.profile_image_url
    );
  };

  const handleGoogleSuccess = (response) => {
    const decoded = jwtDecode(response.credential);
    handleLoginSuccess(decoded.email, decoded.name, decoded.picture);
  };

  const handleNaverSuccess = (naverAccount) => {
    handleLoginSuccess(naverAccount.email, naverAccount.nickname, naverAccount.profileImg);
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

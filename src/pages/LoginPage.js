import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import KakaoLogin from "../login/KakaoLogin";
import GoogleLoginComponent from "../login/GoogleLoginComponent";
import NaverLogin from "../login/NaverLogin";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleKakaoSuccess = (kakaoAccount) => {
    sessionStorage.setItem("nickname", kakaoAccount.nickname);
    sessionStorage.setItem("profileImg", kakaoAccount.thumbnail_image_url);
    navigate("/");
  };

  const handleGoogleSuccess = (response) => {
    const decoded = jwtDecode(response.credential);
    sessionStorage.setItem("nickname", decoded.name);
    sessionStorage.setItem("profileImg", decoded.picture);
    navigate("/");
  };

  const handleNaverSuccess = (naverAccount) => {
    sessionStorage.setItem("nickname", naverAccount.nickname);
    sessionStorage.setItem("profileImg", naverAccount.profileImg);
    navigate("/");
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
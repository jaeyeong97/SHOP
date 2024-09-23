import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "../styles/loginPage.scss";
import KakaoLogin from "./KakaoLogin";
import GoogleLoginComponent from "./GoogleLoginComponent";
import NaverLogin from "./NaverLogin";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleKakaoSuccess = (kakaoAccount) => {
    localStorage.setItem("nickname", kakaoAccount.nickname);
    localStorage.setItem("profileImg", kakaoAccount.thumbnail_image_url);
    navigate("/my-page");
    console.log('카카오 로컬넣기 성공')
  };

  const handleGoogleSuccess = (response) => {
    const decoded = jwtDecode(response.credential);
    localStorage.setItem("nickname", decoded.name);
    localStorage.setItem("profileImg", decoded.picture);
    navigate("/my-page");
    console.log('구글 로컬넣기 성공')
  };

  const handleNaverSuccess = (naverAccount) => {
    localStorage.setItem("nickname", naverAccount.nickname);
    localStorage.setItem("profileImg", naverAccount.profileImg);
    navigate("/my-page");
    console.log('네이버 로컬넣기 성공')
    console.log(naverAccount, '네이버어카운트');
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
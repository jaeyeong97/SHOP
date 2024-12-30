import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { lazy, useEffect } from "react";

const KakaoLogin = lazy(() => import("../login/KakaoLogin"));
const GoogleLoginComponent = lazy(() => import("../login/GoogleLoginComponent"));
const NaverLogin = lazy(() => import("../login/NaverLogin"));

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

  useEffect(() => {
    const sdkUrls = [
      "https://developers.kakao.com/sdk/js/kakao.js",
      "https://accounts.google.com/gsi/client",
      "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js",
    ];

    sdkUrls.forEach((url) => {
      if (!document.querySelector(`script[src="${url}"]`)) {
        const script = document.createElement("script");
        script.src = url;
        script.async = true;
        document.body.appendChild(script);
      }
    });
  }, []);

  return (
    <section id="login-page">
      <div className="logo-wrap">
        <div className="logo-txt">SHOP</div>
        <div className="logo">
          <img src="../assets/logo.webp" alt="로고 이미지" />
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
import { useEffect } from 'react';

const NaverLogin = ({ onSuccess }) => {
  useEffect(() => {
    const { naver } = window;
    const naverLogin = new naver.LoginWithNaverId({
      clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
      // 주소체크
      callbackUrl: "https://shop-2da0a.web.app/",
      loginButton: {
        color: "green",
        type: 3,
        height: 60,
      },
    });

    naverLogin.init();

    const naverLogo = document.querySelector(".naver-login-logo");

    const handleNaverLoginClick = (e) => {
      e.preventDefault();
      const btnNaverLogin = document.getElementById("naverIdLogin").firstChild;
      if (btnNaverLogin) {
        btnNaverLogin.click();
      }
    };

    naverLogo.addEventListener("click", handleNaverLoginClick);

    naverLogin.getLoginStatus(function (status) {
      if (status) {
        onSuccess({
          email: naverLogin.user.email,
          nickname: naverLogin.user.name,
          profileImg: naverLogin.user.profile_image,
        });
      }
    });

    // 클린업 함수: 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      naverLogo.removeEventListener("click", handleNaverLoginClick);
    };
  }, [onSuccess]);

  return (
    <>
      <div id="naverIdLogin" style={{ display: "none" }} />
      <img className="naver-login-logo" src="../assets/naver-login.png" alt="네이버 로그인 버튼" />
    </>
  );
};

export default NaverLogin;

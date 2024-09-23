import { useEffect } from 'react';

const NaverLogin = ({ onSuccess }) => {
  useEffect(() => {
    const { naver } = window;
    const naverLogin = new naver.LoginWithNaverId({
      clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
      callbackUrl: "http://localhost:3000/login-page",
      loginButton: {
        color: "green",
        type: 3,
        height: 60,
      },
    });

    naverLogin.init();

    const naverLogo = document.querySelector(".naver-login-logo");
    naverLogo.addEventListener("click", (e) => {
      e.preventDefault();
      const btnNaverLogin = document.getElementById("naverIdLogin").firstChild;
      if (btnNaverLogin) {
        btnNaverLogin.click();
      }
    });

    naverLogin.getLoginStatus(function (status) {
      if (status) {
        onSuccess({
          email: naverLogin.user.email,
          nickname: naverLogin.user.name,
          profileImg: naverLogin.user.profile_image,
        });
      }
    });
  }, [onSuccess]);

  return (
    <>
      <div id="naverIdLogin" style={{ display: "none" }} />
      <img className="naver-login-logo" src="../assets/naver-login.png" alt="네이버 로그인 버튼" />
    </>
  );
};

export default NaverLogin;

import { useEffect } from 'react';

const KakaoLogin = ({ onSuccess }) => {
  const Kakao = window.Kakao;

  const initKakao = () => {
    const jsKey = process.env.REACT_APP_KAKAO_APP_KEY;
    if (Kakao && !Kakao.isInitialized()) {
      Kakao.init(jsKey);
    }
  };

  useEffect(() => {
    initKakao();
  }, []);

  const handleKakaoLogin = () => {
    Kakao.Auth.login({
      success() {
        Kakao.API.request({
          url: "/v2/user/me",
          success(res) {
            const kakaoAccount = res.kakao_account.profile;
            onSuccess(kakaoAccount);
          },
          fail(error) {
            console.log(error);
          },
        });
      },
      fail(error) {
        console.log(error);
      },
    });
  };

  return (
    <img
      src="../assets/kakao-login.png"
      alt="카카오 로그인 버튼"
      onClick={handleKakaoLogin}
      className='kakao-login-logo'
    />
  );
};

export default KakaoLogin;
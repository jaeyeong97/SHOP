
const KakaoLogin = ({ onSuccess }) => {

    const handleKakaoLogin = () => {
        const Kakao = window.Kakao;
        Kakao.Auth.login({
            success() {
                Kakao.API.request({
                    url: "/v2/user/me",
                    success(res) {
                        const kakaoAccount = res.kakao_account;
                        onSuccess({
                            email: kakaoAccount.email,
                            profileImg: kakaoAccount.profile.profile_image_url,
                            nickname: kakaoAccount.profile.nickname,
                        });
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
            className='kakao-login-logo'
            onClick={handleKakaoLogin}
        />
    );
};

export default KakaoLogin;

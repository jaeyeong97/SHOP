import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/mypage.scss";

const MyPage = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const Kakao = window.Kakao;
    const { naver } = window;

    useEffect(() => {
        const email = localStorage.getItem("email");
        const profileImg = localStorage.getItem("profileImg");
        const nickname = localStorage.getItem("nickname");

        if (email && profileImg && nickname) {
            setUser({
                email,
                profileImg,
                nickname,
            });
        }
    }, [navigate]);

    const handleLogout = () => {
        const email = localStorage.getItem("email");

        // 구글 로그아웃 처리
        if (email && email.includes("@gmail.com")) {
            window.google.accounts.id.disableAutoSelect();
        }
        // 카카오 로그아웃 처리
        else if (email && Kakao && Kakao.Auth) {
            Kakao.Auth.logout(() => {
            });
        }
        // 네이버 로그아웃 처리
        else if (email && email.includes("@naver.com") && naver) {
            naver.Logout();
        }

        // 공통 처리
        localStorage.clear();
        setUser({});
        navigate("/");
    };

    return (
        <section id="my-page">
            <div className="my-section">
                <div className="user-icon">
                    {user.profileImg && user.profileImg !== "undefined" ? (
                        <img src={user.profileImg} alt="프로필 이미지" className="profile" />
                    ) :
                        <img src="../assets/profile-empty.jpg" alt="기본 프로필 이미지" className="profile-empty" />
                    }
                </div>
                {user.nickname && user.nickname !== "undefined" && (
                    <div className="user-name">{user.nickname}</div>
                )}
                {user.email && user.email !== "undefined" && (
                    <div className="user-email">{user.email}</div>
                )}
            </div>
            <button onClick={handleLogout} className="log-off-btn">로그아웃</button>
        </section>
    );
};

export default MyPage;
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const MyPage = () => {
  const [user, setUser] = useState({}); // 로컬스토리지 로그인 정보 저장
  const navigate = useNavigate();

  useEffect(() => {
    const profileImg = localStorage.getItem("profileImg");
    const nickname = localStorage.getItem("nickname");

    // 프로필이미지랑 이름 둘다 들어와야지 출력함..
    if (profileImg && nickname) {
      setUser({
        profileImg,
        nickname,
      });
    }
  }, [navigate]);

  const handleLogout = () => {
    if (window.google && window.google.accounts && window.google.accounts.id) {
      window.google.accounts.id.disableAutoSelect();
    }
    if (window.Kakao && window.Kakao.Auth) {
      window.Kakao.Auth.logout(() => {
        console.log("Kakao 로그아웃 완료");
      });
    }
    if (window.naver && window.naver.Logout) {
      window.naver.Logout();
      console.log("Naver 로그아웃 완료");
    }

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
        <button onClick={handleLogout} className="log-off-btn">로그아웃</button>
      </div>
      <div className="menu">
        <ul>
          <li>
            <div className="w">
              <span className="material-symbols-outlined icon">
                local_shipping
              </span>
              <span className="txt">주문 배송</span>
            </div>
            <span className="material-symbols-outlined arrow">
              chevron_right
            </span>
          </li>
          <li>
            <div className="w">
              <span className="material-symbols-outlined icon">
                chat
              </span>
              <span className="txt">리뷰</span>
            </div>
            <span className="material-symbols-outlined arrow">
              chevron_right
            </span>
          </li>
          <li>
            <div className="w">
              <span className="material-symbols-outlined icon">
                manage_accounts
              </span>
              <span className="txt">내 정보</span>
            </div>
            <span className="material-symbols-outlined arrow">
              chevron_right
            </span>
          </li>
          <li>
            <div className="w">
              <span className="material-symbols-outlined icon">
                settings
              </span>
              <span className="txt">설정</span>
            </div>
            <span className="material-symbols-outlined arrow">
              chevron_right
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MyPage;
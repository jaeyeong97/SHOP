import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { appModalState } from "../recoil/atom";
import { useRecoilState } from "recoil";

const MyPage = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [isAppModal, setIsAppModal] = useRecoilState(appModalState); // toApp 모달 on/off 상태

  useEffect(() => {
    const profileImg = sessionStorage.getItem("profileImg");
    const nickname = sessionStorage.getItem("nickname");

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
      });
    }
    if (window.naver && window.naver.Logout) {
      window.naver.Logout();
    }

    sessionStorage.clear();
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
          <li onClick={() => setIsAppModal(true)}>
            <div className="w">
              <img src="assets/ship.svg" alt="배송 아이콘" className="icon" />
              <span className="txt">주문 배송</span>
            </div>
            <img src="assets/arrow-right.svg" alt="화살표 아이콘" className="arrow" />
          </li>
          <li onClick={() => setIsAppModal(true)}>
            <div className="w">
              <img src="assets/sell.svg" alt="쿠폰 아이콘" className="icon" />
              <span className="txt">쿠폰</span>
            </div>
            <img src="assets/arrow-right.svg" alt="화살표 아이콘" className="arrow" />
          </li>
          <li onClick={() => setIsAppModal(true)}>
            <div className="w">
              <img src="assets/chat.svg" alt="리뷰 아이콘" className="icon" />
              <span className="txt">리뷰</span>
            </div>
            <img src="assets/arrow-right.svg" alt="화살표 아이콘" className="arrow" />
          </li>
          <li onClick={() => setIsAppModal(true)}>
            <div className="w">
              <img src="assets/manage.svg" alt="내 정보 아이콘" className="icon" />
              <span className="txt">내 정보</span>
            </div>
            <img src="assets/arrow-right.svg" alt="화살표 아이콘" className="arrow" />
          </li>
          <li onClick={() => setIsAppModal(true)}>
            <div className="w">
              <img src="assets/setting.svg" alt="설정 아이콘" className="icon" />
              <span className="txt">설정</span>
            </div>
            <img src="assets/arrow-right.svg" alt="화살표 아이콘" className="arrow" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MyPage;
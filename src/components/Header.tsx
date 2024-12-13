import { useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { cartState, appModalState } from "../recoil/atom";
import { SelectedItem } from "../Types";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [cartArr, setCartArr] = useRecoilState<SelectedItem[]>(cartState);
  const [isToApp, setIsToApp] = useRecoilState<boolean>(appModalState);

  // 로컬 스토리지에서 장바구니 상태 불러오기
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (savedCart) {
      setCartArr(savedCart);
    }
  }, [setCartArr]);

  const handleModalClose = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("to-app-modal-bg")) {
      setIsToApp(false);
    }
  };

  return (
    <div className="to-app-banner" onClick={handleModalClose}>
      <div
        className={isToApp ? "to-app-modal-bg active" : "to-app-modal-bg"}
      ></div>
      <div className={isToApp ? "to-app-modal active" : "to-app-modal"}>
        <div className="txt1">해당 기능은 구현중입니다!</div>
        <div className="txt2">
          QR 코드를 통해서 포트폴리오 웹사이트로 갈 수 있어요.
        </div>
        <div className="qr">
          <img src="../assets/qr.webp" alt="" />
        </div>
        <div className="txt3">휴대폰으로 QR 코드를 스캔해서 확인해보세요</div>
        <button className="confirm" onClick={() => setIsToApp(false)}>
          확인
        </button>
      </div>
      <div className="banner">
        <div className="left">
          <div className="logo">
            <img src="../assets/logo.webp" alt="로고" />
          </div>
          <div className="txt">앱에서 더 많은 상품을 확인해보세요!</div>
        </div>
        <button className="to-app" onClick={() => setIsToApp(true)}>
          앱으로 이동
        </button>
      </div>
      <div className="search-cart-wrap">
        <div className="search">
          <NavLink to="/search" className="link">
            <span className="material-symbols-outlined search-icon">
              search
            </span>
            <div className="txt">하나만 사도 무료배송</div>
          </NavLink>
        </div>
        <div className="cart">
          <NavLink to="/cart">
            <span className="material-symbols-outlined cart-icon">
              shopping_cart
            </span>
          </NavLink>
          {cartArr.length > 0 ? (
            <div className="dot">
              <span>{cartArr.length}</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

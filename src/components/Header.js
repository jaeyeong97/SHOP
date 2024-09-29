import { useState } from 'react';
import "../styles/header.scss";
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { cartState } from '../recoil/atom';

const Header = () => {
  const navigate = useNavigate();
  const cartArr = useRecoilValue(cartState);
  const [isToApp, setIsToApp] = useState(false);

  const handleModalClose = (e) => {
    if (e.target.classList.contains("to-app-modal-bg")) {
      setIsToApp(false);
    }
  };

  return (
    <div className='to-app-banner' onClick={handleModalClose}>
      <div className={isToApp ? "to-app-modal-bg active" : "to-app-modal-bg"}></div>
      <div className={isToApp ? "to-app-modal active" : "to-app-modal"}>
        <div className="txt1">해당 기능은 앱에서 사용 가능해요!</div>
        <div className="txt2">앱 설치하고 더 편하게 쇼핑해보세요</div>
        <div className="qr">
          <img src="../assets/qr.png" alt="" />
        </div>
        <div className="txt3">휴대폰으로 QR 코드를 스캔해서 설치해보세요</div>
        <button className="confirm" onClick={() => setIsToApp(false)}>확인</button>
      </div>
      <div className="banner">
        <div className="left">
          <div className="logo">
            <img src="../assets/logo.png" alt="로고" />
          </div>
          <div className="txt">앱에서 더 많은 상품을 확인해보세요!</div>
        </div>
        <button className="to-app" onClick={() => setIsToApp(true)}>앱으로 이동</button>
      </div>
      <div className="search-cart-wrap">
        <div className="search" onClick={() => { navigate('/search') }}>
          <span className="material-symbols-outlined search-icon">
            search
          </span>
          <div className="txt">하나만 사도 무료배송</div>
        </div>
        <div className="cart" onClick={() => { navigate('/cart') }}>
          <span className="material-symbols-outlined cart-icon">
            shopping_cart
          </span>
          {cartArr.length > 0 ? <div className='dot'><span>{cartArr.length}</span></div> : ""}
        </div>
      </div>
    </div>
  );
};

export default Header;

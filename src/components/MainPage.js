import { useNavigate } from "react-router-dom";
import "../styles/mainpage.scss";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <section id="main-page">
      <div className="banner">
        <div className="left">
          <div className="logo">
            <img src="../assets/logo.png" alt="로고" />
          </div>
          <div className="txt">앱에서 더 많은 상품을 확인해보세요!</div>
        </div>
        <button className="to-app">앱으로 이동</button>
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
        </div>
      </div>
      <div className="main-slider">컴포넌트 따로해서 코드 관리</div>
      <div className="main-category-wrap">
        <div className="icon">
          <img src="../assets/top.jpg" alt="상의" onClick={() => { navigate('/top') }} />
          <span className="txt">상의</span>
        </div>
        <div className="icon">
          <img src="../assets/pants.jpg" alt="하의" onClick={() => { navigate('/pants') }} />
          <span className="txt">하의</span>
        </div>
        <div className="icon">
          <img src="../assets/outer.jpg" alt="아우터" onClick={() => { navigate('/outer') }} />
          <span className="txt">아우터</span>
        </div>
        <div className="icon">
          <img src="../assets/shoes.jpg" alt="신발" onClick={() => { navigate('/shoes') }} />
          <span className="txt">신발</span>
        </div>
        <div className="icon">
          <img src="../assets/skirt.jpg" alt="치마" onClick={() => { navigate('/skirt') }} />
          <span className="txt">스커트</span>
        </div>
        <div className="icon">
          <img src="../assets/home-ware.jpg" alt="홈웨어" onClick={() => { navigate('/homeware') }} />
          <span className="txt">홈웨어</span>
        </div>
        <div className="icon">
          <img src="../assets/socks.jpg" alt="양말" onClick={() => { navigate('/socks') }} />
          <span className="txt">양말</span>
        </div>
        <div className="icon">
          <img src="../assets/bag.jpg" alt="가방" onClick={() => { navigate('/bag') }} />
          <span className="txt">가방</span>
        </div>
        <div className="icon">
          <img src="../assets/cap.jpg" alt="모자" onClick={() => { navigate('/cap') }} />
          <span className="txt">모자</span>
        </div>
        <div className="icon">
          <img src="../assets/acc.jpg" alt="악세사리" onClick={() => { navigate('/accessory') }} />
          <span className="txt">악세사리</span>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
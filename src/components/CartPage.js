import { Link } from "react-router-dom";
import { cartState } from "../recoil/atom";
import "../styles/cartPage.scss";
import { useRecoilValue } from "recoil";

const CartPage = () => {
  const cartArr = useRecoilValue(cartState);
  console.log(cartArr)
  return (
    <section id="cart-page">
      {cartArr.length > 0 ? (
        <div className="cart-page-wrap">
          {cartArr.map((item) => (
            <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="item">
              <img className="item-img" src={item.img} alt={item.name} />
              <div>{item.name}</div>
              <div>사이즈: {item.selectedSize}</div>
              <div>색상: {item.selectedColor}</div>
              <div>수량: {item.quantity}</div> {/* 수량 표시 */}
            </div>
          ))}
        </div>
      ) : (
        <div className="no-cart-wrap">
          <span className="material-symbols-outlined icon">shopping_cart</span>
          <span className="t1">장바구니가 비어있어요</span>
          <span className="t2">상품을 추가해보세요. </span>
          <Link to="/">
            <button className="go-shopping">상품 보러가기</button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default CartPage;
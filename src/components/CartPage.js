import { Link } from "react-router-dom";
import { cartState, selectedCartItemState } from "../recoil/atom";
import "../styles/cartPage.scss";
import { useRecoilState } from "recoil";

const CartPage = () => {
  const [cartArr, setCartArr] = useRecoilState(cartState); // 장바구니 상태
  const [selectedCartItems, setSelectedCartItems] = useRecoilState(selectedCartItemState); // 장바구니에서 체크된 상품
  console.log(cartArr, '장바구니에 들어온 배열');
  console.log(selectedCartItems, '장바구니에서 체크된 배열');

  // 체크박스 클릭 시 선택된 상품 관리
  const handleCheckboxChange = (item) => {
    if (selectedCartItems.includes(item)) {
      setSelectedCartItems(selectedCartItems.filter(selected => selected !== item)); // 선택 해제
    } else {
      setSelectedCartItems([...selectedCartItems, item]); // 선택
    }
  };

  // 선택된 상품 삭제
  const handleDeleteSelectedItems = () => {
    const updatedCart = cartArr.filter(item => !selectedCartItems.includes(item));
    setCartArr(updatedCart);
    setSelectedCartItems([]); // 선택된 상품 초기화
  };

  // 가격 총합을 계산하는 함수
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    selectedCartItems.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  };

  return (
    <section id="cart-page">
      {/* 장바구니 1개 이상 들어와있을때 */}
      {cartArr.length > 0 ? (
        <div className="cart-page-wrap">
          <div className="flex">
            <div className="w">
              <button className="check-all"></button>
              <span>전체 선택(1/1)</span>
            </div>
            <div className="delete-selected">선택 삭제</div>
          </div>
          {cartArr.map((item) => (
            <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="item">
              <div className="bt-img-txt-flex">
                <button
                  className={`check ${selectedCartItems.includes(item) ? "selected" : ""}`}
                  onClick={() => handleCheckboxChange(item)}
                >
                  {selectedCartItems.includes(item) ?
                    <span className="material-symbols-outlined icon">
                      check
                    </span> :
                    ""}
                </button>
                <img className="item-img" src={item.img} alt={item.name} />
                <div className="text-wrap">
                  <div className="name">{item.name}</div>
                  <div className="price">{item.price.toLocaleString()}원</div>
                </div>
              </div>
              <div className="options-wrap">
                {item.selectedSize &&
                  <span>
                    사이즈 - {item.selectedSize}
                  </span>
                }
                {item.selectedSize && item.selectedColor &&
                  <span> / </span>
                }
                {item.selectedColor &&
                  <span>
                    색상 - {item.selectedColor}
                  </span>
                }
                <span> / </span>
                <span>{item.quantity}개</span>
              </div>
              <button className="delete-btn" onClick={handleDeleteSelectedItems}>
                <span className="material-symbols-outlined icon">
                  close
                </span>
              </button>
            </div>
          ))}
          <div className="buy-button-wrap">
            <button className="buy-button">
              {selectedCartItems.length > 0
                ? `${calculateTotalPrice().toLocaleString()}원 구매하기`
                : "구매하기"}
            </button>
          </div>
        </div>
      ) : (
        // 장바구니 비었을때
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
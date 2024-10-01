import { Link, useNavigate } from "react-router-dom";
import { cartState, selectedCartItemState, appModalState } from "../recoil/atom";
import "../styles/cartPage.scss";
import { useRecoilState, useRecoilValue } from "recoil";

const CartPage = () => {
  const isAppModal = useRecoilValue(appModalState); // toApp 모달 on/off 상태
  const [cartArr, setCartArr] = useRecoilState(cartState); // 장바구니 상태
  const [selectedCartItems, setSelectedCartItems] = useRecoilState(selectedCartItemState); // 장바구니에서 체크된 상품
  const navigate = useNavigate();

  const handleCheckAllBox = () => {
    // 모든 상품이 선택된 상태이면 전체 해제
    if (selectedCartItems.length === cartArr.length) {
      setSelectedCartItems([]);
    } else {
      // 전체 선택하기
      setSelectedCartItems(cartArr);
    }
  };

  // 체크박스 클릭 시 선택된 상품 관리
  const handleCheckbox = (item) => {
    if (selectedCartItems.includes(item)) {
      setSelectedCartItems(selectedCartItems.filter(selected => selected !== item)); // 선택 해제
    } else {
      setSelectedCartItems([...selectedCartItems, item]); // 선택
    }
  };

  // 선택된 상품 삭제
  const handleDeleteSelectedItem = (item) => {
    const updatedCart = cartArr.filter(cartItem => cartItem !== item); // 클릭한 특정 아이템 삭제
    setCartArr(updatedCart);
    setSelectedCartItems(prevSelected => prevSelected.filter(selectedItem => selectedItem !== item)); // 삭제된 아이템을 선택된 아이템에서 제거
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
          <div className={`common-header ${isAppModal ? 'active' : ''}`}>
            <div className="back" onClick={() => navigate(-1)}>
              <span className="material-symbols-outlined icon">
                arrow_back_ios
              </span>
            </div>
            <h3 className="title">장바구니</h3>
            <div className="wrap">
              <span className="material-symbols-outlined icon" onClick={() => navigate("/search")}>
                search
              </span>
              <span className="material-symbols-outlined icon" onClick={() => navigate("/")}>
                home
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="w">
              <button className={`check-all ${selectedCartItems.length === cartArr.length ? "selected" : ""}`} onClick={handleCheckAllBox}>
                {selectedCartItems.length === cartArr.length ?
                  <span className="material-symbols-outlined icon">
                    check
                  </span> :
                  ""}
              </button>
              <span className="txt">전체 선택 ({selectedCartItems.length}/{cartArr.length})</span>
            </div>
            <div className="delete-all" onClick={() => setCartArr([])}>전체 삭제</div>
          </div>
          {cartArr.map((item) => (
            <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="item">
              <div className="bt-img-txt-flex">
                <button
                  className={`check ${selectedCartItems.includes(item) ? "selected" : ""}`}
                  onClick={() => handleCheckbox(item)}
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
              <button className="delete-btn" onClick={() => handleDeleteSelectedItem(item)}>
                <span className="material-symbols-outlined icon">
                  close
                </span>
              </button>
            </div>
          ))}
          <div className="buy-button-wrap">
            {selectedCartItems.length > 0 ?
              <button className="buy-button" onClick={() => navigate("/purchase")}>
                {calculateTotalPrice().toLocaleString()}원 구매하기
              </button>
              :
              <button className="no-button">
                상품을 선택해주세요
              </button>
            }

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
import { useRecoilState } from "recoil";
import { appModalState, selectedCartItemState } from "../recoil/atom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PurchasePage = () => {
  const [isAppModal, setIsAppModal] = useRecoilState(appModalState); // toApp 모달 on/off 상태
  const [purchaseItems, setPurchaseItems] = useRecoilState(selectedCartItemState);
  const navigate = useNavigate();

  // 로컬 스토리지에서 선택된 장바구니 상품 불러오기
  useEffect(() => {
    const savedSelectedItems = JSON.parse(localStorage.getItem("selectedItem"));
    if (savedSelectedItems) {
      setPurchaseItems(savedSelectedItems); // 로컬 스토리지에서 가져온 데이터를 Recoil 상태로 설정
    }
  }, [setPurchaseItems]);

  // 가격 총합을 계산하는 함수
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    purchaseItems.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  };

  return (
    <div className="purchase-page">
      <div className={`common-header ${isAppModal ? 'active' : ''}`}>
        <div className="back" onClick={() => navigate(-1)}>
          <span className="material-symbols-outlined icon">
            arrow_back_ios
          </span>
        </div>
        <h3 className="title">결제</h3>
        <div className="wrap">
          <span className="material-symbols-outlined icon" onClick={() => navigate("/search")}>
            search
          </span>
          <span className="material-symbols-outlined icon" onClick={() => navigate("/")}>
            home
          </span>
        </div>
      </div>
      <div className="section1">
        <div className="flex">
          <div className="title">배송지를 추가해주세요.</div>
          <div className="add">배송지 추가</div>
        </div>
        <div className="address">배송지를 등록하면 편하게 주문할 수 있어요.</div>
      </div>
      <div className="section2">
        <div className="title">주문 상품</div>
        {purchaseItems.map((item) => (
          <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="item">
            <img className="item-img" src={item.img} alt={item.name} />
            <div className="item-text-wrap">
              <div className="item-name">{item.name}</div>
              <div className="flex">
                {item.selectedColor &&
                  <span className="item-color">{item.selectedColor} 색상</span>
                }
                {item.selectedSize && item.selectedColor &&
                  <span> / </span>
                }
                {item.selectedSize &&
                  <span className="item-size">{item.selectedSize} 사이즈</span>
                }
                <span> / </span>
                <span className="item-quantity">{item.quantity}개</span>
              </div>
              <div className="item-price">{item.price.toLocaleString()}원</div>
            </div>
          </div>
        ))}
      </div>
      <div className="section3">
        <div className="title">결제 금액</div>
        <div className="flex">
          <div className="s-title">상품 금액</div>
          <div className="price">{calculateTotalPrice().toLocaleString()}원</div>
        </div>
        <div className="flex">
          <div className="s-title">배송비</div>
          <div className="price">배송비 무료</div>
        </div>
        <div className="total-flex">
          <div className="s-title">총 결제 금액</div>
          <div className="price">{calculateTotalPrice().toLocaleString()}원</div>
        </div>
      </div>
      <div className="buy-button-wrap">
        <button className="buy-button" onClick={() => setIsAppModal(true)}>
          {calculateTotalPrice().toLocaleString()}원 구매하기
        </button>
      </div>
    </div>
  );
};

export default PurchasePage;
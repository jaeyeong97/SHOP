import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  addressFormState,
  appModalState,
  selectedCartItemState,
} from "../recoil/atom";
import { AddressForm, SelectedItem } from "../Types";
import SectionHeader from "../components/SectionHeader";

const PurchasePage: React.FC = () => {
  const [isAppModal, setIsAppModal] = useRecoilState<boolean>(appModalState); // toApp 모달 on/off 상태
  const [purchaseItems, setPurchaseItems] = useRecoilState<SelectedItem[]>(
    selectedCartItemState
  );
  const addressData = useRecoilValue<AddressForm>(addressFormState);

  const navigate = useNavigate();

  // 로컬 스토리지에서 선택된 장바구니 상품 불러오기
  useEffect(() => {
    const savedSelectedItems = JSON.parse(
      localStorage.getItem("selectedItem") || "[]"
    );
    if (savedSelectedItems) {
      setPurchaseItems(savedSelectedItems); // 로컬 스토리지에서 가져온 데이터를 Recoil 상태로 설정
    }
  }, [setPurchaseItems]);

  // 가격 총합을 계산하는 함수
  const calculateTotalPrice = (): number => {
    let totalPrice = 0;
    purchaseItems.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  };

  const handleBuyBtn = (): void => {
    if (!addressData.address) return;
    setIsAppModal(true);
  };

  // 휴대폰 번호에 "-" 붙이기
  const formatPhoneNumber = (phoneNumber: string): string => {
    return phoneNumber.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3");
  };

  return (
    <div className="purchase-page">
      <SectionHeader title={"결제"} />
      {addressData.address !== "" ? (
        <div className="section1">
          <div className="flex">
            <div className="title">배송지</div>
            <div className="add" onClick={() => navigate("/address")}>
              배송지 변경
            </div>
          </div>
          <div className="address-wrap">
            <div className="t1">
              <span className="address-name">{addressData.addressName}</span>
              <span className="default">기본 배송지</span>
            </div>
            <div className="t2">
              <span>{addressData.personName} / </span>
              <span>{formatPhoneNumber(addressData.phone)}</span>
            </div>
            <div className="t3">
              <span>
                {addressData.address}, {addressData.detailAddress} [
                {addressData.zonecode}]
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="section1">
          <div className="flex">
            <div className="title">배송지를 추가해주세요.</div>
            <div className="add" onClick={() => navigate("/address")}>
              배송지 추가
            </div>
          </div>
          <div className="before-address">
            배송지를 등록하면 편하게 주문할 수 있어요.
          </div>
        </div>
      )}

      <div className="section2">
        <div className="title">주문 상품</div>
        {purchaseItems.map((item: SelectedItem) => (
          <div
            key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
            className="item"
          >
            <img className="item-img" src={item.img} alt={item.name} />
            <div className="item-text-wrap">
              <div className="item-name">{item.name}</div>
              <div className="flex">
                {item.selectedColor && (
                  <span className="item-color">{item.selectedColor} 색상</span>
                )}
                {item.selectedSize && item.selectedColor && <span> / </span>}
                {item.selectedSize && (
                  <span className="item-size">{item.selectedSize} 사이즈</span>
                )}
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
          <div className="price">
            {calculateTotalPrice().toLocaleString()}원
          </div>
        </div>
        <div className="flex">
          <div className="s-title">배송비</div>
          <div className="price">배송비 무료</div>
        </div>
        <div className="total-flex">
          <div className="s-title">총 결제 금액</div>
          <div className="price">
            {calculateTotalPrice().toLocaleString()}원
          </div>
        </div>
      </div>
      <div className="buy-button-wrap">
        <button className="buy-button" onClick={handleBuyBtn}>
          {!addressData.address ? (
            <div>배송지를 추가해주세요.</div>
          ) : (
            <div>{calculateTotalPrice().toLocaleString()}원 구매하기</div>
          )}
        </button>
      </div>
    </div>
  );
};

export default PurchasePage;

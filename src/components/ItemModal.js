import { useRecoilState } from "recoil";
import { selectedItemState, cartState } from "../recoil/atom";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteBtn";
import "../styles/itemModal.scss";
import { useEffect, useRef, useState } from "react";

const ItemModal = () => {
  const [selectedItem, setSelectedItem] = useRecoilState(selectedItemState); // 선택된 상품
  const [cart, setCart] = useRecoilState(cartState); // 장바구니 상태
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false); // 구매 모달
  const [clickSize, setClickSize] = useState(false);
  const [clickColor, setClickColor] = useState(false);
  const [warningMessage, setWarningMessage] = useState(""); // 경고 메시지 상태
  const [cartAlert, setCartAlert] = useState(false); // 장바구니 알림
  const [alertTimeout, setAlertTimeout] = useState(false);
  const sizeListRef = useRef(null);
  const colorListRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedItem || !selectedItem.item) {
      navigate("/");
    } else {
    }
  }, [selectedItem, navigate]);

  // 모달 열릴시 스크롤 제어
  useEffect(() => {
    if (isBuyModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isBuyModalOpen]);

  if (!selectedItem || !selectedItem.item) return null; // selectedItem.item이 null일 경우 에러 방지

  const handleBuyClick = () => {
    setIsBuyModalOpen(true); // 구매 버튼 클릭 시 모달 오픈
  };

  const closeBuyModal = (e) => {
    if (e.target.classList.contains("item-modal-bg")) {
      setIsBuyModalOpen(false);
    }
  };

  const handleClickSize = () => {
    setClickSize(!clickSize);
    setWarningMessage("");
  };

  const handleClickColor = () => {
    // color와size가 둘다 존재하는데 size부터 선택안했다면 상위옵션부터
    if (selectedItem.item.color && selectedItem.item.size && !selectedItem.selectedSize) {
      setWarningMessage("상위 옵션부터 선택해주세요.");
      return;
    }
    setClickColor(!clickColor);
  }

  // 사이즈 클릭 함수
  const handleSelecetedSize = (size) => {
    setSelectedItem({
      item: selectedItem.item,
      selectedSize: size,
      selectedColor: null,
      quantity: 1,
    });
    setClickSize(false);
    setClickColor(true);
  };
  // 색상 클릭 함수
  const handleSelecetedColor = (color) => {
    setSelectedItem({
      item: selectedItem.item,
      selectedSize: selectedItem.selectedSize,
      selectedColor: color,
      quantity: 1,
    });
    setClickColor(false);
  };
  // 담긴 상품 닫기 버튼
  const handleDeleteItem = () => {
    setSelectedItem({
      item: selectedItem.item,
      selectedSize: null,
      selectedColor: null,
      quantity: 1,
    });
  }

  // 장바구니 버튼
  const handleCartClick = () => {
    const existingItemIndex = cart.findIndex(item =>
      item.id === selectedItem.item.id &&
      item.selectedSize === selectedItem.selectedSize &&
      item.selectedColor === selectedItem.selectedColor
    );

    if (existingItemIndex !== -1) {
      // 이미 장바구니에 존재하는 상품일 경우 수량 증가
      setCart(prevCart => {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1 // 수량 증가
        };
        return updatedCart;
      });
    } else {
      // 장바구니에 없는 상품일 경우 새로 추가
      const newItem = {
        ...selectedItem.item,
        selectedSize: selectedItem.selectedSize,
        selectedColor: selectedItem.selectedColor,
        quantity: 1 // 기본 수량을 1로 설정
      };
      setCart(prevCart => [...prevCart, newItem]);
    }

    setIsBuyModalOpen(false);
    setCartAlert(true);

    // 장바구니 넣은 후 선택된 옵션 초기화
    setSelectedItem({
      item: selectedItem.item,
      selectedSize: null,
      selectedColor: null,
      quantity: 1
    });

    if (alertTimeout) {
      clearTimeout(alertTimeout);
    }
    const timeout = setTimeout(() => {
      setCartAlert(false);
    }, 2000);
    setAlertTimeout(timeout);
  };

  return (
    <div className="item-modal" onClick={closeBuyModal} >
      <div className={isBuyModalOpen ? "item-modal-bg active" : "item-modal-bg"}></div>
      <img src={selectedItem.item.img} alt={selectedItem.item.name} className="item-img" />
      <div className="name">{selectedItem.item.name}</div>
      <div className="price">{selectedItem.item.price}</div>
      <div className="btn-wrap">
        <FavoriteButton item={selectedItem.item} />
        <div className="buy-btn" onClick={handleBuyClick}>구매하기</div>
      </div>
      {/* 구매절차 모달 */}
      {isBuyModalOpen && (
        <div className="buy-modal-wrap">
          {/* 옵션이 모두 선택되었는지 확인 */}
          {(selectedItem.item.size && !selectedItem.item.color && selectedItem.selectedSize) ||
            (selectedItem.item.color && !selectedItem.item.size && selectedItem.selectedColor) ||
            (selectedItem.item.size && selectedItem.item.color && selectedItem.selectedSize && selectedItem.selectedColor) ? (
            // 상품 옵션 선택 후 부분
            <div className="to-cart-or-to-buy">
              <div className="box">
                <div className="delete" onClick={handleDeleteItem}>
                  <span className="material-symbols-outlined icon">
                    close
                  </span>
                </div>
                {selectedItem.selectedSize && <span>{selectedItem.selectedSize} Size </span>}
                {selectedItem.selectedColor && <span>{selectedItem.selectedColor}</span>}
                <div className="price">{selectedItem.item.price}원</div>
              </div>
              <div className="total-price">총 <span>{selectedItem.item.price}원</span></div>
              <div className="inner-btn-wrap">
                <button className="inner-cart-btn btn" onClick={handleCartClick}>장바구니</button>
                <button className="inner-buy-btn btn">구매하기</button>
              </div>
            </div>
          ) : (
            // 상품 옵션 선택 부분
            <div className="buy-modal">
              {selectedItem.item.size && (
                <div className="size-wrap" >
                  <div
                    className="size-title"
                    onClick={handleClickSize}
                    style={{ borderRadius: clickSize ? "5px 5px 0 0" : "5px" }}
                  >
                    {selectedItem.selectedSize ? selectedItem.selectedSize : "사이즈 선택하기"}
                    {clickSize ? <span className="material-symbols-outlined">
                      keyboard_arrow_up
                    </span> : <span className="material-symbols-outlined">
                      keyboard_arrow_down
                    </span>}
                  </div>
                  <div
                    className={clickSize ? "size-list active" : "size-list"}
                    ref={sizeListRef}
                    style={{
                      height: clickSize && sizeListRef.current ? `${sizeListRef.current.scrollHeight}px` : '0px',
                    }}>
                    {selectedItem.item.size.map((size, index) => (
                      <div key={index} className="size" onClick={() => handleSelecetedSize(size)}>{size}</div>
                    ))}
                  </div>
                </div>
              )}
              {selectedItem.item.color && (
                <div className="color-wrap">
                  <div
                    className="color-title"
                    onClick={handleClickColor}
                    style={{ borderRadius: clickColor ? "5px 5px 0 0" : "5px" }}
                  >
                    {selectedItem.selectedColor ? selectedItem.selectedColor : "색상 선택하기"}
                    {clickColor ? <span className="material-symbols-outlined">
                      keyboard_arrow_up
                    </span> : <span className="material-symbols-outlined">
                      keyboard_arrow_down
                    </span>}
                  </div>
                  <div
                    ref={colorListRef}
                    className={clickColor ? "color-list active" : "color-list"}
                    style={{
                      height: clickColor && colorListRef.current ? `${colorListRef.current.scrollHeight}px` : '0px',
                    }}
                  >
                    {selectedItem.item.color.map((color, index) => (
                      <div key={index} className="color" onClick={() => handleSelecetedColor(color)}>{color}</div>
                    ))}
                  </div>
                </div>
              )}
              {warningMessage && <div className="warning-message">{warningMessage}</div>}
              <button className="close-btn" onClick={() => setIsBuyModalOpen(false)}>옵션 선택 닫기</button>
            </div>
          )}
        </div>
      )}
      {cartAlert && <div className="cart-alert">장바구니에 상품을 담았습니다.</div>}
    </div>
  );
};

export default ItemModal;

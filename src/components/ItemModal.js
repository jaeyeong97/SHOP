import { useRecoilState } from "recoil";
import { selectedItemState, cartState, appModalState } from "../recoil/atom";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteBtn";
import { useEffect, useRef, useState } from "react";

const ItemModal = () => {
  const [selectedItem, setSelectedItem] = useRecoilState(selectedItemState); // 선택된 상품
  const [cart, setCart] = useRecoilState(cartState); // 장바구니 상태
  const [isToApp, setIsToApp] = useRecoilState(appModalState); // 앱모달 on/off
  const [open, setOpen] = useState(false); // 상품정보 더보기 버튼상태
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false); // 구매 모달
  const [clickSize, setClickSize] = useState(false);
  const [clickColor, setClickColor] = useState(false);
  const [warningMessage, setWarningMessage] = useState(""); // 경고 메시지 상태
  const [cartAlert, setCartAlert] = useState(false); // 장바구니 알림
  const [alertTimeout, setAlertTimeout] = useState(false);
  const [imgLoading, setImgLoading] = useState(true); // index[0] 이미지 로딩 상태
  const sizeListRef = useRef(null);
  const colorListRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedItem || !selectedItem.item) {
      navigate("/");
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
    const price = parseInt(selectedItem.item.price.replace(/,/g, ''), 10); // 쉼표 제거 후 숫자로 변환

    const existingItemIndex = cart.findIndex(item =>
      item.id === selectedItem.item.id &&
      item.selectedSize === selectedItem.selectedSize &&
      item.selectedColor === selectedItem.selectedColor
    );

    if (existingItemIndex !== -1) {
      // 이미 장바구니에 존재하는 상품일 경우 수량 및 가격 증가
      setCart(prevCart => {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + selectedItem.quantity, // 수량 증가
          price: price * (updatedCart[existingItemIndex].quantity + selectedItem.quantity) // 가격 계산
        };
        // 로컬 스토리지 저장
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
      });
    } else {
      // 장바구니에 없는 상품일 경우 새로 추가
      const newItem = {
        ...selectedItem.item,
        selectedSize: selectedItem.selectedSize,
        selectedColor: selectedItem.selectedColor,
        quantity: selectedItem.quantity, // 선택한 수량 반영
        price: price * selectedItem.quantity // 선택한 수량에 따른 가격 계산
      };
      setCart(prevCart => {
        const updatedCart = [...prevCart, newItem];

        // 로컬 스토리지에 저장
        localStorage.setItem('cart', JSON.stringify(updatedCart));

        return updatedCart;
      });
    }

    setIsBuyModalOpen(false);
    setCartAlert(true);

    // 장바구니 넣은 후 선택된 옵션 초기화 (수량은 초기화)
    setSelectedItem({
      item: selectedItem.item,
      selectedSize: null,
      selectedColor: null,
      quantity: 1, // 초기화는 여전히 필요
    });

    if (alertTimeout) {
      clearTimeout(alertTimeout);
    }
    const timeout = setTimeout(() => {
      setCartAlert(false);
    }, 2000);
    setAlertTimeout(timeout);
  };


  // 수량 증가 함수
  const handleQuantityIncrease = () => {
    setSelectedItem(prevItem => ({
      ...prevItem,
      quantity: prevItem.quantity + 1,
    }));
  };

  // 수량 감소 함수
  const handleQuantityDecrease = () => {
    if (selectedItem.quantity > 1) {
      setSelectedItem(prevItem => ({
        ...prevItem,
        quantity: prevItem.quantity - 1,
      }));
    }
  };

  const handleDirectBuyClick = () => {
    handleCartClick();
    navigate("/cart");
  };

  const handleLoad = () => {
    setImgLoading(false);
  };

  return (
    <div className="item-modal" onClick={closeBuyModal} >
      <div className={isBuyModalOpen ? "item-modal-bg active" : "item-modal-bg"}></div>
      <div className="item-modal-info">
        <div className="item-main">
          <img
            src={selectedItem.item.img}
            alt={selectedItem.item.name}
            className="item-img"
          />
          <div className="name">{selectedItem.item.name}</div>
          <div className="price">{selectedItem.item.price}원</div>
          <div className="login-box" onClick={() => setIsToApp(true)}>
            <div className="txt" >회원가입 시 최대 65,000원 혜택</div>
            <span className="material-symbols-outlined arrow">
              chevron_right
            </span>
          </div>
        </div>
        <div className="item-more">
          {imgLoading && (
            <div className="loading">
              <img src="../assets/spinner.gif" alt="spinner" className="spinner" />
            </div>
          )}
          {selectedItem.item.sImgs[0] &&
            <img className="item-img"
              src={selectedItem.item.sImgs[0]}
              alt={selectedItem.item.name}
              onLoad={handleLoad}
              style={{ display: imgLoading ? 'none' : 'block' }}
            />
          }
          {!open &&
            <div className="open-btn-wrap">
              <div className="open-btn" onClick={() => setOpen(true)}>상품정보 더 보기</div>
              <div className="bg"></div>
            </div>
          }
          {open && <div className="open">
            {selectedItem.item.sImgs[1] && (
              <img
                className="item-img"
                src={selectedItem.item.sImgs[1]}
                alt={selectedItem.item.name}
              />
            )}
            <div className="txt-section">
              {selectedItem.item.color && <div className="s-title">COLOR</div>}
              {selectedItem.item.color &&
                <div className="flex">
                  {selectedItem.item.color.map((color, index) => (
                    <div key={index} className="txt">&nbsp;{color}&nbsp;</div>
                  ))}</div>
              }
              {selectedItem.item.size && <div className="s-title">SIZE</div>}
              {selectedItem.item.size &&
                <div className="flex">
                  {selectedItem.item.size.map((size, index) => (
                    <div key={index} className="txt">&nbsp;{size}&nbsp;</div>
                  ))}</div>
              }
              <div className="s-title">FABRIC</div>
              <div className="txt">코튼100%</div>
            </div>
            {selectedItem.item.sImgs[2] && <img className="item-img" src={selectedItem.item.sImgs[2]} alt={selectedItem.item.name} />}
            <div className="txt-section">
              <div className="s-title">COMMENT</div>
              <div className="txt-wrap">
                <span className="txt">- 사이즈를 재는 방법에 따라 1~2cm 오차가 있을 수 있습니다.</span>
                <span className="txt">- 빛의 각도에 따라 색깔이 달라 보일 수 있습니다.</span>
                <span className="txt">- 화면의 해상도에 따라 색깔이 달라 보일 수 있습니다.</span>
              </div>
            </div>
          </div>}
        </div>
      </div>
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
                <div className="info">
                  {selectedItem.selectedSize &&
                    <span>{selectedItem.selectedSize} Size </span>
                  }
                  {selectedItem.selectedSize && selectedItem.selectedColor && <span>/ </span>
                  }
                  {selectedItem.selectedColor &&
                    <span>{selectedItem.selectedColor}</span>
                  }
                </div>
                <div className="flex">
                  <div className="quantity-wrap">
                    <div className="minus icon" onClick={handleQuantityDecrease}></div>
                    <div className="quantity">{selectedItem.quantity}</div>
                    <div className="plus icon" onClick={handleQuantityIncrease}></div>
                  </div>
                  <div className="price">{selectedItem.item.price}원</div>
                </div>
              </div>
              <div className="total-price">
                총 <span>{(parseInt(selectedItem.item.price.replace(/,/g, ''), 10) * selectedItem.quantity).toLocaleString()}원</span>
              </div>
              <div className="inner-btn-wrap">
                <button className="inner-cart-btn btn" onClick={handleCartClick}>장바구니</button>
                <button className="inner-buy-btn btn" onClick={handleDirectBuyClick}>구매하기</button>
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
      {cartAlert && <div className="cart-alert">
        <div className="txt">장바구니에 상품을 담았습니다.</div>
        <div className="go" onClick={() => navigate("/cart")}>바로가기</div>
      </div>
      }
    </div>
  );
};

export default ItemModal;

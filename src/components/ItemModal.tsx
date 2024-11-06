import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedItemState, cartState, appModalState } from "../recoil/atom";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteBtn";
import { SelectedItem } from "../Types";

const ItemModal: React.FC = () => {
  const [selectedItem, setSelectedItem] =
    useRecoilState<SelectedItem>(selectedItemState); // 선택된 상품
  const [cart, setCart] = useRecoilState<SelectedItem[]>(cartState); // 장바구니 상태
  const [isToApp, setIsToApp] = useRecoilState<boolean>(appModalState); // 앱모달 on/off
  const [open, setOpen] = useState<boolean>(false); // 상품정보 더보기 버튼상태
  const [isBuyModalOpen, setIsBuyModalOpen] = useState<boolean>(false); // 구매 모달
  const [clickSize, setClickSize] = useState<boolean>(false);
  const [clickColor, setClickColor] = useState<boolean>(false);
  const [warningMessage, setWarningMessage] = useState<string>(""); // 경고 메시지 상태
  const [cartAlert, setCartAlert] = useState<boolean>(false); // 장바구니 알림
  const [alertTimeout, setAlertTimeout] = useState<number | null>(null);
  const [imgLoading, setImgLoading] = useState<boolean>(true); // index[0] 이미지 로딩 상태
  const sizeListRef = useRef<HTMLDivElement | null>(null);
  const colorListRef = useRef<HTMLDivElement | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedItem.id) {
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

  const handleBuyClick = (): void => {
    setIsBuyModalOpen(true);
  };

  if (!selectedItem.id) return null;

  const closeBuyModal = (e: React.MouseEvent): void => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("item-modal-bg")) {
      setIsBuyModalOpen(false);
    }
  };

  const handleClickSize = (): void => {
    setClickSize(!clickSize);
    setWarningMessage("");
  };

  const handleClickColor = (): void => {
    // color와size가 둘다 존재하는데 size부터 선택안했다면 상위옵션부터
    if (selectedItem.color && selectedItem.size && !selectedItem.selectedSize) {
      setWarningMessage("상위 옵션부터 선택해주세요.");
      return;
    }
    setClickColor(!clickColor);
  };

  // 사이즈 클릭 함수
  const handleSelecetedSize = (size: any): void => {
    setSelectedItem({
      ...selectedItem,
      selectedSize: size,
      selectedColor: null,
      quantity: 1,
    });
    setClickSize(false);
    setClickColor(true);
  };
  // 색상 클릭 함수
  const handleSelecetedColor = (color: any): void => {
    setSelectedItem({
      ...selectedItem,
      selectedSize: selectedItem.selectedSize,
      selectedColor: color,
      quantity: 1,
    });
    setClickColor(false);
  };
  // 담긴 상품 닫기 버튼
  const handleDeleteItem = (): void => {
    setSelectedItem({
      ...selectedItem,
      selectedSize: null,
      selectedColor: null,
      quantity: 1,
    });
  };

  // 장바구니 버튼
  const handleCartClick = (): void => {
    const existingItemIndex = cart.findIndex(
      (item) =>
        item !== null &&
        item.id === selectedItem.id &&
        item.selectedSize === selectedItem.selectedSize &&
        item.selectedColor === selectedItem.selectedColor
    );

    if (existingItemIndex !== -1) {
      // 이미 장바구니에 존재하는 상품일 경우 수량 및 가격 증가
      setCart((prevCart) => {
        const updatedCart = [...prevCart];
        const existingItem = updatedCart[existingItemIndex];

        if (existingItem) {
          updatedCart[existingItemIndex] = {
            ...existingItem,
            quantity: existingItem.quantity + selectedItem.quantity, // 수량 증가
            price:
              selectedItem.price *
              (existingItem.quantity + selectedItem.quantity), // 가격 계산
          };

          // 로컬 스토리지 저장
          localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
        return updatedCart;
      });
    } else {
      // 장바구니에 없는 상품일 경우 새로 추가
      const newItem: SelectedItem = {
        id: selectedItem.id,
        name: selectedItem.name,
        color: selectedItem.color,
        sale: selectedItem.sale,
        img: selectedItem.img,
        size: selectedItem.size,
        sImgs: selectedItem.sImgs,
        selectedSize: selectedItem.selectedSize,
        selectedColor: selectedItem.selectedColor,
        quantity: selectedItem.quantity,
        price: selectedItem.price * selectedItem.quantity,
      };

      setCart((prevCart: SelectedItem[]) => {
        const updatedCart = [...prevCart, newItem];

        // 로컬 스토리지에 저장
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        return updatedCart;
      });
    }

    setIsBuyModalOpen(false);
    setCartAlert(true);

    // 장바구니 넣은 후 선택된 옵션 초기화
    setSelectedItem({
      ...selectedItem,
      selectedSize: null,
      selectedColor: null,
      quantity: 1,
    });

    if (alertTimeout) {
      clearTimeout(alertTimeout);
    }
    const timeout = window.setTimeout(() => {
      setCartAlert(false);
    }, 2000);

    setAlertTimeout(timeout);
  };

  // 수량 증가 함수
  const handleQuantityIncrease = (): void => {
    setSelectedItem((prevItem) => ({
      ...prevItem,
      quantity: prevItem.quantity + 1,
    }));
  };

  // 수량 감소 함수
  const handleQuantityDecrease = (): void => {
    if (selectedItem.quantity > 1) {
      setSelectedItem((prevItem) => ({
        ...prevItem,
        quantity: prevItem.quantity - 1,
      }));
    }
  };

  const handleDirectBuyClick = (): void => {
    handleCartClick();
    navigate("/cart");
  };

  const handleLoad = (): void => {
    setImgLoading(false);
  };

  return (
    <div className="item-modal" onClick={closeBuyModal}>
      <div
        className={isBuyModalOpen ? "item-modal-bg active" : "item-modal-bg"}
      ></div>
      <div className="item-modal-info">
        <div className="item-main">
          <div className="item-img-wrap">
            <img
              src={selectedItem.img}
              alt={selectedItem.name}
              className="item-img"
            />
          </div>
          <div className="name">{selectedItem.name}</div>
          <div className="price">
            <span className="sale">{selectedItem.sale}</span>
            {selectedItem.price.toLocaleString()}원
          </div>
          <div className="login-box" onClick={() => setIsToApp(true)}>
            <div className="txt">회원가입 시 최대 65,000원 혜택</div>
            <span className="material-symbols-outlined arrow">
              chevron_right
            </span>
          </div>
        </div>
        <div className="item-more">
          {imgLoading && (
            <div className="loading">
              <img
                src="../assets/spinner.gif"
                alt="spinner"
                className="spinner"
              />
            </div>
          )}
          {selectedItem.sImgs[0] && (
            <img
              className="item-img"
              src={selectedItem.sImgs[0]}
              alt={selectedItem.name}
              onLoad={handleLoad}
              style={{ display: imgLoading ? "none" : "block" }}
            />
          )}
          {!open && (
            <div className="open-btn-wrap">
              <div className="open-btn" onClick={() => setOpen(true)}>
                상품정보 더 보기
              </div>
              <div className="bg"></div>
            </div>
          )}
          {open && (
            <div className="open">
              {selectedItem.sImgs[1] && (
                <img
                  className="item-img"
                  src={selectedItem.sImgs[1]}
                  alt={selectedItem.name}
                />
              )}
              <div className="txt-section">
                {selectedItem.color && <div className="s-title">COLOR</div>}
                {selectedItem.color && (
                  <div className="flex">
                    {selectedItem.color.map((color, index) => (
                      <div key={index} className="txt">
                        &nbsp;{color}&nbsp;
                      </div>
                    ))}
                  </div>
                )}
                {selectedItem.size && <div className="s-title">SIZE</div>}
                {selectedItem.size && (
                  <div className="flex">
                    {selectedItem.size.map((size, index) => (
                      <div key={index} className="txt">
                        &nbsp;{size}&nbsp;
                      </div>
                    ))}
                  </div>
                )}
                <div className="s-title">FABRIC</div>
                <div className="txt">코튼100%</div>
              </div>
              {selectedItem.sImgs[2] && (
                <img
                  className="item-img"
                  src={selectedItem.sImgs[2]}
                  alt={selectedItem.name}
                />
              )}
              <div className="txt-section">
                <div className="s-title">COMMENT</div>
                <div className="txt-wrap">
                  <span className="txt">
                    - 사이즈를 재는 방법에 따라 1~2cm 오차가 있을 수 있습니다.
                  </span>
                  <span className="txt">
                    - 빛의 각도에 따라 색깔이 달라 보일 수 있습니다.
                  </span>
                  <span className="txt">
                    - 화면의 해상도에 따라 색깔이 달라 보일 수 있습니다.
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="btn-wrap">
        <FavoriteButton item={selectedItem} />
        <div className="buy-btn" onClick={handleBuyClick}>
          구매하기
        </div>
      </div>
      {/* 구매절차 모달 */}
      {isBuyModalOpen && (
        <div className="buy-modal-wrap">
          {/* 옵션이 모두 선택되었는지 확인 */}
          {(selectedItem.size &&
            !selectedItem.color &&
            selectedItem.selectedSize) ||
          (selectedItem.color &&
            !selectedItem.size &&
            selectedItem.selectedColor) ||
          (selectedItem.size &&
            selectedItem.color &&
            selectedItem.selectedSize &&
            selectedItem.selectedColor) ? (
            // 상품 옵션 선택 후 부분
            <div className="to-cart-or-to-buy">
              <div className="box">
                <div className="delete" onClick={handleDeleteItem}>
                  <span className="material-symbols-outlined icon">close</span>
                </div>
                <div className="info">
                  {selectedItem.selectedSize && (
                    <span>{selectedItem.selectedSize} Size </span>
                  )}
                  {selectedItem.selectedSize && selectedItem.selectedColor && (
                    <span>/ </span>
                  )}
                  {selectedItem.selectedColor && (
                    <span>{selectedItem.selectedColor}</span>
                  )}
                </div>
                <div className="flex">
                  <div className="quantity-wrap">
                    <div
                      className="minus icon"
                      onClick={handleQuantityDecrease}
                    ></div>
                    <div className="quantity">{selectedItem.quantity}</div>
                    <div
                      className="plus icon"
                      onClick={handleQuantityIncrease}
                    ></div>
                  </div>
                  <div className="price">
                    {selectedItem.price.toLocaleString()}원
                  </div>
                </div>
              </div>
              <div className="total-price">
                총{" "}
                <span>
                  {(
                    selectedItem.price * selectedItem.quantity
                  ).toLocaleString()}
                  원
                </span>
              </div>
              <div className="inner-btn-wrap">
                <button
                  className="inner-cart-btn btn"
                  onClick={handleCartClick}
                >
                  장바구니
                </button>
                <button
                  className="inner-buy-btn btn"
                  onClick={handleDirectBuyClick}
                >
                  구매하기
                </button>
              </div>
            </div>
          ) : (
            // 상품 옵션 선택 부분
            <div className="buy-modal">
              {selectedItem.size && (
                <div className="size-wrap">
                  <div
                    className="size-title"
                    onClick={handleClickSize}
                    style={{ borderRadius: clickSize ? "5px 5px 0 0" : "5px" }}
                  >
                    {selectedItem.selectedSize
                      ? selectedItem.selectedSize
                      : "사이즈 선택하기"}
                    {clickSize ? (
                      <span className="material-symbols-outlined">
                        keyboard_arrow_up
                      </span>
                    ) : (
                      <span className="material-symbols-outlined">
                        keyboard_arrow_down
                      </span>
                    )}
                  </div>
                  <div
                    className={clickSize ? "size-list active" : "size-list"}
                    ref={sizeListRef}
                    style={{
                      height:
                        clickSize && sizeListRef.current
                          ? `${sizeListRef.current.scrollHeight}px`
                          : "0px",
                    }}
                  >
                    {selectedItem.size.map((size, index) => (
                      <div
                        key={index}
                        className="size"
                        onClick={() => handleSelecetedSize(size)}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {selectedItem.color && (
                <div className="color-wrap">
                  <div
                    className="color-title"
                    onClick={handleClickColor}
                    style={{ borderRadius: clickColor ? "5px 5px 0 0" : "5px" }}
                  >
                    {selectedItem.selectedColor
                      ? selectedItem.selectedColor
                      : "색상 선택하기"}
                    {clickColor ? (
                      <span className="material-symbols-outlined">
                        keyboard_arrow_up
                      </span>
                    ) : (
                      <span className="material-symbols-outlined">
                        keyboard_arrow_down
                      </span>
                    )}
                  </div>
                  <div
                    ref={colorListRef}
                    className={clickColor ? "color-list active" : "color-list"}
                    style={{
                      height:
                        clickColor && colorListRef.current
                          ? `${colorListRef.current.scrollHeight}px`
                          : "0px",
                    }}
                  >
                    {selectedItem.color.map((color, index) => (
                      <div
                        key={index}
                        className="color"
                        onClick={() => handleSelecetedColor(color)}
                      >
                        {color}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {warningMessage && (
                <div className="warning-message">{warningMessage}</div>
              )}
              <button
                className="close-btn"
                onClick={() => setIsBuyModalOpen(false)}
              >
                옵션 선택 닫기
              </button>
            </div>
          )}
        </div>
      )}
      {cartAlert && (
        <div className="cart-alert">
          <div className="txt">장바구니에 상품을 담았습니다.</div>
          <div className="go" onClick={() => navigate("/cart")}>
            바로가기
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemModal;

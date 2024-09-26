import { useRecoilState } from "recoil";
import { selectedItemState } from "../recoil/atom";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteBtn";
import "../styles/itemModal.scss";
import { useEffect, useRef, useState } from "react";

const ItemModal = () => {
  const [selectedItem, setSelectedItem] = useRecoilState(selectedItemState); // 상태 가져오기
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [clickSize, setClickSize] = useState(false);
  const [clickColor, setClickColor] = useState(false);
  const [warningMessage, setWarningMessage] = useState(""); // 경고 메시지 상태
  const sizeListRef = useRef(null);
  const colorListRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedItem || !selectedItem.item) {
      navigate("/");
    } else {
    }
  }, [selectedItem, navigate]);

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
    const currentItem = selectedItem.item;
    setSelectedItem({
      item: currentItem,
      selectedSize: size,
      selectedColor: null
    });
    setClickSize(false);
    setClickColor(true);
  };
  // 색상 클릭 함수
  const handleSelecetedColor = (color) => {
    const currentItem = selectedItem.item;
    setSelectedItem({
      item: currentItem,
      selectedSize: selectedItem.selectedSize,
      selectedColor: color
    });
    setClickColor(false);
  };
  // 담긴 상품 닫기 버튼
  const handleDeleteItem = () => {
    const currentItem = selectedItem.item;
    setSelectedItem({
      item: currentItem,
      selectedSize: null,
      selectedColor: null
    });
  }

  return (
    <div className="item-modal" onClick={closeBuyModal}>
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
                <button className="inner-cart-btn btn">장바구니</button>
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
                    {selectedItem.selectedColor ? selectedItem.selectedColor : "사이즈 선택하기"}
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
    </div>
  );
};

export default ItemModal;

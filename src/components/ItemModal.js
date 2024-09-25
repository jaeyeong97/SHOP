import { useRecoilValue, useSetRecoilState } from "recoil";
import { selectedItemState, selectedSizeState, selectedColorState } from "../recoil/atom";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteBtn";
import "../styles/itemModal.scss";
import { useEffect, useRef, useState } from "react";

const ItemModal = () => {
  const selectedItem = useRecoilValue(selectedItemState);
  const setSelectedSize = useSetRecoilState(selectedSizeState); //선택된 사이즈
  const setSelectedColor = useSetRecoilState(selectedColorState); //선택된 색상

  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [clickSize, setClickSize] = useState(false);
  const [clickColor, setClickColor] = useState(false);
  const [warningMessage, setWarningMessage] = useState(""); // 경고 메시지 상태
  const sizeListRef = useRef(null);
  const colorListRef = useRef(null);

  const navigate = useNavigate();

  // useRecoilState로 상태저장한걸 map하는거라 페이지 새로고침시 에러 방지
  useEffect(() => {
    if (!selectedItem) {
      navigate("/");
    }
  }, [selectedItem, navigate]);
  if (!selectedItem) return null;

  const handleBuyClick = () => {
    setIsBuyModalOpen(true); // 구매 버튼 클릭 시 모달 오픈
  };

  const closeBuyModal = () => {
    setIsBuyModalOpen(false); // 모달 닫기
  };

  const handleClickSize = () => {
    setClickSize(!clickSize);
    setWarningMessage("");
  };

  const handleClickColor = () => {
    // color와size가 둘다 존재하는데 size부터 선택안했다면 상위옵션부터
    if (selectedItem.color && selectedItem.size && !clickSize) {
      setWarningMessage("상위 옵션부터 선택해주세요.");
      return;
    }
    setClickColor(!clickColor);
  }

  const handleSelecetedSize = (size) => {
    setSelectedSize(size);
    setClickSize(false);
    setClickColor(true);
  };

  const handleSelecetedColor = (color) => {
    setSelectedColor(color);
    setClickColor(false);
  };

  return (
    <div className="item-modal">
      <img src={selectedItem.img} alt={selectedItem.name} className="item-img" />
      <div className="name">{selectedItem.name}</div>
      <div className="price">{selectedItem.price}</div>
      <div className="btn-wrap">
        <FavoriteButton item={selectedItem} />
        <div className="buy-btn" onClick={handleBuyClick}>구매하기</div>
      </div>

      {/* 구매 모달 */}
      {isBuyModalOpen && (
        <div className="buy-modal-wrap">
          <div className="buy-modal">
            {selectedItem.size && (
              <div className="size-wrap" >
                <div
                  className="size-title"
                  onClick={handleClickSize}
                  style={{ borderRadius: clickSize ? "5px 5px 0 0" : "5px" }}
                >
                  사이즈 선택하기
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
                  {selectedItem.size.map((size, index) => (
                    <div key={index} className="size" onClick={() => handleSelecetedSize(size)}>{size}</div>
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
                  색상 선택하기
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
                  {selectedItem.color.map((color, index) => (
                    <div key={index} className="color" onClick={() => handleSelecetedColor(color)}>{color}</div>
                  ))}
                </div>
              </div>
            )}
            {warningMessage && <div className="warning-message">{warningMessage}</div>}
            <button className="close-btn" onClick={closeBuyModal}>옵션 선택 닫기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemModal;

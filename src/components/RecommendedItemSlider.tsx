import { useRecoilState, useRecoilValue } from "recoil";
import { recommendedItemsState, selectedItemState } from "../recoil/atom";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteBtn";
import { SelectedItem, Item } from "../Types";
import { useEffect, useState } from "react";

const RecommendedItemSlider: React.FC = () => {
  const [selectedItem, setSelectedItem] =
    useRecoilState<SelectedItem>(selectedItemState);
  const recommendedItems = useRecoilValue(recommendedItemsState); // 추천상품
  const [currentIndex, setCurrentIndex] = useState<number>(0); // 슬라이더 인덱스
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); // 현재 이미지 인덱스
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = (): void => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = (): void => {
    if (currentIndex < recommendedItems.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleClickItem = (item: Item) => {
    setSelectedItem({
      ...item,
      selectedSize: null,
      selectedColor: null,
      quantity: 1,
    });
    navigate(`/item/${item.id}`);
  };

  return (
    <div className="recommended-item-slider">
      <img
        src="/assets/arrow.svg"
        alt="arrow"
        className="arrow left"
        onClick={prevSlide}
        style={{ display: currentIndex === 0 ? "none" : "block" }}
      />
      <section className="item-map-section">
        {recommendedItems.map((item: Item) => (
          <div
            key={item.id}
            className="item"
            tabIndex={0}
            onClick={() => handleClickItem(item)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleClickItem(item);
              }
            }}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <div className="item-img-wrap">
              <img
                className="item-img"
                src={item.sImgs[currentImageIndex]}
                alt={item.name}
              />
              <FavoriteButton item={item} />
            </div>
            <div className="name">{item.name}</div>
            <div className="price">
              <span className="sale">{item.sale}</span>
              {item.price.toLocaleString()}원
            </div>
          </div>
        ))}
      </section>
      <img
        src="/assets/arrow.svg"
        alt="arrow"
        className="arrow right"
        onClick={nextSlide}
        style={{ display: currentIndex === 4 ? "none" : "block" }}
      />
    </div>
  );
};

export default RecommendedItemSlider;

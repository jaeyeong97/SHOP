import { useRecoilValue, useRecoilState } from "recoil";
import { sliderState, sliderIndexState } from "../recoil/atom";
import { useEffect } from "react";

const Slider = () => {
  const slider = useRecoilValue(sliderState); // 슬라이더 이미지
  const [currentIndex, setCurrentIndex] = useRecoilState(sliderIndexState); // 슬라이더 인덱스

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slider.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slider.length - 1 ? 0 : prevIndex + 1
    );
  };

  // 3초 인터벌 슬라이드
  useEffect(() => {
    const intervalSlider = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalSlider);
  }, [currentIndex]);

  return (
    <div className="slider-wrap">
      <span className="material-symbols-outlined arrow left" onClick={prevSlide}>
        arrow_forward_ios
      </span>
      <div className="slider" style={{ transform: `translateX(-${100 * currentIndex}%)` }}>
        {slider.map((slider) => (
          <img
            key={slider.id}
            className="slide"
            src={slider.img} alt={slider.id}
          >
          </img>
        ))}
      </div>
      <span className="material-symbols-outlined arrow right" onClick={nextSlide}>
        arrow_forward_ios
      </span>
      <div className="index-wrap">
        <span className="current-index">{currentIndex + 1}</span>
        <span className="s">/</span>
        <span className="end-index">{slider.length}</span>
      </div>
    </div>
  );
};
export default Slider;
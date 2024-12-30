import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { sliderState } from "../recoil/atom";
import { Slider } from "../Types";

const SliderComponent: React.FC = () => {
  const slider = useRecoilValue<Slider[]>(sliderState); // 슬라이더
  const [currentIndex, setCurrentIndex] = useState<number>(0); // 슬라이더 인덱스

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slider.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slider.length - 1 ? 0 : prevIndex + 1
    );
  };

  // 5초 인터벌 슬라이드
  useEffect(() => {
    const intervalSlider = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalSlider);
  }, []);

  return (
    <section className="slider-wrap">
      <img
        src="/assets/arrow.svg"
        alt="arrow"
        className="arrow left"
        onClick={prevSlide}
      />
      <div
        className="slider"
        style={{ transform: `translateX(-${100 * currentIndex}%)` }}
      >
        {slider.map((slider: Slider) => (
          <img
            key={slider.id}
            className="slide"
            src={slider.img}
            alt={slider.id}
            width={600}
            height={299}
          ></img>
        ))}
      </div>
      <img
        src="/assets/arrow.svg"
        alt="arrow"
        className="arrow right"
        onClick={nextSlide}
      />
      <div className="index-wrap">
        <span className="current-index">{currentIndex + 1}</span>
        <span className="s">/</span>
        <span className="end-index">{slider.length}</span>
      </div>
    </section>
  );
};
export default SliderComponent;

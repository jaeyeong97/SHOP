import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { sliderState } from "../recoil/atom";
import { rouletteState } from "../recoil/atom";
import { Slider } from "../Types";
import Roulette from "./Roulette";

const SliderComponent: React.FC = () => {
  const slider = useRecoilValue<Slider[]>(sliderState); // 슬라이더
  const [currentIndex, setCurrentIndex] = useState<number>(0); // 슬라이더 인덱스
  const [rouletteModal, setRouletteModal] =
    useRecoilState<boolean>(rouletteState); // 룰렛 모달

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
  }, [currentIndex]);

  const handleClickSlide = (slider: Slider): void => {
    if (
      slider.id === "슬라이더1-1" ||
      slider.id === "슬라이더1-2" ||
      slider.id === "슬라이더1-3" ||
      slider.id === "슬라이더1-4" ||
      slider.id === "슬라이더1-5"
    ) {
      setRouletteModal(true);
    }
  };

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
            onClick={() => handleClickSlide(slider)}
            loading="lazy"
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
      {rouletteModal && <Roulette />}
    </section>
  );
};
export default SliderComponent;

import { useRef, useState } from "react";
import Confetti from "./Confetti";
import { rouletteState } from "../recoil/atom";
import { useRecoilState } from "recoil";

const items = [
  "무료 배송 쿠폰",
  "50% 쿠폰",
  "30% 쿠폰",
  "10% 쿠폰",
  "500P 적립금",
  "1000P 적립금",
];

const Roulette: React.FC = () => {
  const [rouletteModal, setRouletteModal] =
    useRecoilState<boolean>(rouletteState); // 룰렛 모달 on/off
  const [rotating, setRotating] = useState<boolean>(false); // 룰렛 회전 여부
  const [rotation, setRotation] = useState<number>(0); // 룰렛 회전 각도
  const [selectedItem, setSelectedItem] = useState<string | null | undefined>(
    null
  ); // 선택된 상품
  const confetti = useRef(Confetti()); // 꽃가루
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 각도에 맞게 당첨된 아이템 체크
  const getSelectedItem = (finalDegree: number) => {
    if (finalDegree >= 330 || finalDegree < 30) return items[0];
    if (finalDegree >= 30 && finalDegree < 90) return items[1];
    if (finalDegree >= 90 && finalDegree < 150) return items[2];
    if (finalDegree >= 150 && finalDegree < 210) return items[3];
    if (finalDegree >= 210 && finalDegree < 270) return items[4];
    if (finalDegree >= 270 && finalDegree < 330) return items[5];
  };

  const handleRotation = () => {
    if (rotating) return;

    const randomDegree = Math.floor(Math.random() * 360) + 360 * 5;
    setRotation(randomDegree);
    setRotating(true);

    // 선택된 상품 각도에 맞게 계산하기
    timeoutRef.current = setTimeout(() => {
      const finalDegree = randomDegree % 360;
      const selected = getSelectedItem(finalDegree);
      setSelectedItem(selected);
      confetti.current.launchConfetti(); // confetti 실행
    }, 5000);
  };

  const handleModalClose = () => {
    setRouletteModal(false);
    if (rotating) {
      clearTimeout(timeoutRef.current as ReturnType<typeof setTimeout>);
      setRotating(false);
    }
  };

  return (
    <div className="roulette">
      <div className="roulette__bg"></div>
      <div className="roulette__in">
        <div className="roulette__in--title">🎉룰렛돌리면 상품 당첨!🎉</div>
        <span className="material-symbols-outlined roulette__in--arrow">
          label
        </span>
        <div className="roulette__in--btn" onClick={handleRotation}>
          시작!
        </div>
        <div
          className="roulette__in__circle"
          style={{
            transform: `translate(-50%, -50%) rotate(-${rotation}deg)`,
            transition: rotating ? "5s ease-out" : "none",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`roulette__in__circle--item item${index + 1}`}
              style={{
                transform: `rotate(${(360 / items.length) * index}deg)`,
              }}
            >
              {item}
            </div>
          ))}
          <div className="roulette__in__circle--line line1"></div>
          <div className="roulette__in__circle--line line2"></div>
          <div className="roulette__in__circle--line line3"></div>
        </div>
        {selectedItem && (
          <div className="roulette__in__result">{selectedItem} 당첨!</div>
        )}
        <span
          className="material-symbols-outlined roulette__in__closeBtn"
          onClick={handleModalClose}
        >
          close
        </span>
      </div>
    </div>
  );
};

export default Roulette;

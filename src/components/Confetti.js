import JSConfetti from "js-confetti";
import { useEffect } from "react";

// 꽃가루 라이브러리
const Confetti = () => {
  const jsConfetti = new JSConfetti();

  useEffect(() => {
    const canvas = document.querySelector("canvas");
    if (canvas) {
      canvas.style.zIndex = "9999";
    }
  }, []);

  const launchConfetti = () => {
    jsConfetti.addConfetti({
      confettiColors: [
        "#FF5733", "#FFBD33",
        "#33FF57", "#33A1FF",
        "#8E33FF", "#FF33C4",
        "#FFC300", "#FF6F33",
        "#33FFF6", "#F700FF",
      ],
      confettiRadius: 5,
      confettiNumber: 500,
    });
  };

  return { launchConfetti };
};

export default Confetti;

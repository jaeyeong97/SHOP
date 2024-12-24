import { useRef } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";

const CategoryPage: React.FC = () => {
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  const categories = [
    "상의",
    "하의",
    "아우터",
    "신발",
    "스커트",
    "양말",
    "가방",
    "모자",
    "아이웨어",
    "주얼리",
  ];

  const handleCategoryClick = (index: number): void => {
    // 해당 카테고리 섹션으로 스크롤 이동
    if (categoryRefs.current[index]) {
      categoryRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <section id="category-page">
      <SectionHeader title={"카테고리"} />
      <div className="category-wrap">
        <nav className="category1">
          <ul>
            {categories.map((category, index) => (
              <li key={index} onClick={() => handleCategoryClick(index)}>
                {category}
              </li>
            ))}
          </ul>
        </nav>
        <div className="category2">
          <Link to="/top">
            <div className="title">
              <span className="txt">상의</span>
              <img src="assets/arrow-right.svg" alt="오른쪽 화살표" />
            </div>
          </Link>
          <div
            className="top-wrap wrap"
            ref={(el) => (categoryRefs.current[0] = el)}
          >
            <Link to="/top" className="w">
              <img src="../assets/top.webp" alt="긴팔" />
              <span>긴팔</span>
            </Link>
          </div>
          <Link to="/pants">
            <div className="title">
              <span className="txt">하의</span>
              <img src="assets/arrow-right.svg" alt="오른쪽 화살표" />
            </div>
          </Link>
          <div
            className="pants-wrap wrap"
            ref={(el) => (categoryRefs.current[1] = el)}
          >
            <Link to="/pants" className="w">
              <img src="../assets/pants.webp" alt="청바지" />
              <span>청바지</span>
            </Link>
          </div>
          <Link to="/outer">
            <div className="title">
              <span className="txt">아우터</span>
              <img src="assets/arrow-right.svg" alt="오른쪽 화살표" />
            </div>
          </Link>
          <div
            className="outer-wrap wrap"
            ref={(el) => (categoryRefs.current[2] = el)}
          >
            <Link to="/outer" className="w">
              <img src="../assets/outer.webp" alt="바람막이" />
              <span>바람막이</span>
            </Link>
          </div>
          <Link to="/shoes">
            <div className="title">
              <span className="txt">신발</span>
              <img src="assets/arrow-right.svg" alt="오른쪽 화살표" />
            </div>
          </Link>
          <div
            className="shoes-wrap wrap"
            ref={(el) => (categoryRefs.current[3] = el)}
          >
            <Link to="/shoes" className="w">
              <img src="../assets/shoes.webp" alt="운동화" />
              <span>운동화</span>
            </Link>
          </div>
          <Link to="/skirt">
            <div className="title">
              <span className="txt">스커트</span>
              <img src="assets/arrow-right.svg" alt="오른쪽 화살표" />
            </div>
          </Link>
          <div
            className="skirt-wrap wrap"
            ref={(el) => (categoryRefs.current[4] = el)}
          >
            <Link to="/skirt" className="w">
              <img src="../assets/skirt.webp" alt="미니 스커트" />
              <span>미니 스커트</span>
            </Link>
          </div>
          <Link to="/socks">
            <div className="title">
              <span className="txt">양말</span>
              <img src="assets/arrow-right.svg" alt="오른쪽 화살표" />
            </div>
          </Link>
          <div
            className="socks-wrap wrap"
            ref={(el) => (categoryRefs.current[5] = el)}
          >
            <Link to="/socks" className="w">
              <img src="../assets/socks.webp" alt="긴 양말" />
              <span>긴 양말</span>
            </Link>
          </div>
          <Link to="/bag">
            <div className="title">
              <span className="txt">가방</span>
              <img src="assets/arrow-right.svg" alt="오른쪽 화살표" />
            </div>
          </Link>
          <div
            className="bag-wrap wrap"
            ref={(el) => (categoryRefs.current[6] = el)}
          >
            <Link to="/bag" className="w">
              <img src="../assets/bag.webp" alt="백팩" />
              <span>백팩</span>
            </Link>
          </div>
          <Link to="/cap">
            <div className="title">
              <span className="txt">모자</span>
              <img src="assets/arrow-right.svg" alt="오른쪽 화살표" />
            </div>
          </Link>
          <div
            className="cap-wrap wrap"
            ref={(el) => (categoryRefs.current[7] = el)}
          >
            <Link to="/cap" className="w">
              <img src="../assets/cap.webp" alt="볼캡" />
              <span>볼캡</span>
            </Link>
          </div>
          <Link to="/eyeware">
            <div className="title">
              <span className="txt">아이웨어</span>
              <img src="assets/arrow-right.svg" alt="오른쪽 화살표" />
            </div>
          </Link>
          <div
            className="eyeware-wrap wrap"
            ref={(el) => (categoryRefs.current[8] = el)}
          >
            <Link to="/eyeware" className="w">
              <img src="../assets/eyeware.webp" alt="안경" />
              <span>안경</span>
            </Link>
          </div>
          <Link to="/accessory">
            <div className="title">
              <span className="txt">주얼리</span>
              <img src="assets/arrow-right.svg" alt="오른쪽 화살표" />
            </div>
          </Link>
          <div
            className="accessory-wrap wrap"
            ref={(el) => (categoryRefs.current[9] = el)}
          >
            <Link to="/accessory" className="w">
              <img src="../assets/acc.webp" alt="목걸이" />
              <span>목걸이</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;

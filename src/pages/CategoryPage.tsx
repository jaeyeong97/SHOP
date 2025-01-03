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
              <img src="../assets/top.webp" alt="상의" />
              <span>상의</span>
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
              <img src="../assets/pants.webp" alt="하의" />
              <span>하의</span>
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
              <img src="../assets/outer.webp" alt="아우터" />
              <span>아우터</span>
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
              <img src="../assets/shoes.webp" alt="신발" />
              <span>신발</span>
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
              <img src="../assets/skirt.webp" alt="스커트" />
              <span>스커트</span>
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
              <img src="../assets/socks.webp" alt="양말" />
              <span>양말</span>
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
              <img src="../assets/bag.webp" alt="가방" />
              <span>가방</span>
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
              <img src="../assets/cap.webp" alt="모자" />
              <span>모자</span>
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
              <img src="../assets/eyeware.webp" alt="아이웨어" />
              <span>아이웨어</span>
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
              <img src="../assets/acc.webp" alt="주얼리" />
              <span>주얼리</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;

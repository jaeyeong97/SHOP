import { useRef } from "react";
import "../styles/categoryPage.scss";
import { Link, useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const categoryRefs = useRef([]);
  const navigate = useNavigate();
  const handleCategoryClick = (index) => {
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
      <div className="common-header">
        <div className="back" onClick={() => navigate(-1)}>
          <span className="material-symbols-outlined icon">
            arrow_back_ios
          </span>
        </div>
        <h3 className="title">카테고리</h3>
        <div className="wrap">
          <span className="material-symbols-outlined icon" onClick={() => navigate("/search")}>
            search
          </span>
          <span className="material-symbols-outlined icon" onClick={() => navigate("/")}>
            home
          </span>
        </div>
      </div>
      <div className="category-wrap">
        <div className="category1">
          <ul>
            <li onClick={() => handleCategoryClick(0)}>상의</li>
            <li onClick={() => handleCategoryClick(1)}>하의</li>
            <li onClick={() => handleCategoryClick(2)}>아우터</li>
            <li onClick={() => handleCategoryClick(3)}>신발</li>
            <li onClick={() => handleCategoryClick(4)}>스커트</li>
            <li onClick={() => handleCategoryClick(5)}>양말</li>
            <li onClick={() => handleCategoryClick(6)}>가방</li>
            <li onClick={() => handleCategoryClick(7)}>모자</li>
            <li onClick={() => handleCategoryClick(8)}>아이웨어</li>
            <li onClick={() => handleCategoryClick(9)}>주얼리</li>
          </ul>
        </div>
        <div className="category2">
          <Link to="/top">
            <div className="title">
              <span className="txt">상의</span>
              <span className="material-symbols-outlined arrow">
                chevron_right
              </span>
            </div>
          </Link>
          <div className="top-wrap wrap" ref={(el) => (categoryRefs.current[0] = el)}>
            <Link to="/top" className="w">
              <img src="../assets/top.jpg" alt="긴팔" />
              <span>긴팔</span>
            </Link>
          </div>
          <Link to="/pants">
            <div className="title">
              <span className="txt">하의</span>
              <span className="material-symbols-outlined arrow">
                chevron_right
              </span>
            </div>
          </Link>
          <div className="pants-wrap wrap" ref={(el) => (categoryRefs.current[1] = el)}>
            <Link to="/pants" className="w">
              <img src="../assets/pants.jpg" alt="청바지" />
              <span>청바지</span>
            </Link>
          </div>
          <Link to="/outer">
            <div className="title">
              <span className="txt">아우터</span>
              <span className="material-symbols-outlined arrow">
                chevron_right
              </span>
            </div>
          </Link>
          <div className="outer-wrap wrap" ref={(el) => (categoryRefs.current[2] = el)}>
            <Link to="/outer" className="w">
              <img src="../assets/outer.jpg" alt="바람막이" />
              <span>바람막이</span>
            </Link>
          </div>
          <Link to="/shoes">
            <div className="title">
              <span className="txt">신발</span>
              <span className="material-symbols-outlined arrow">
                chevron_right
              </span>
            </div>
          </Link>
          <div className="shoes-wrap wrap" ref={(el) => (categoryRefs.current[3] = el)}>
            <Link to="/shoes" className="w">
              <img src="../assets/shoes.jpg" alt="운동화" />
              <span>운동화</span>
            </Link>
          </div>
          <Link to="/skirt">
            <div className="title">
              <span className="txt">스커트</span>
              <span className="material-symbols-outlined arrow">
                chevron_right
              </span>
            </div>
          </Link>
          <div className="skirt-wrap wrap" ref={(el) => (categoryRefs.current[4] = el)}>
            <Link to="/skirt" className="w">
              <img src="../assets/skirt.jpg" alt="미니 스커트" />
              <span>미니 스커트</span>
            </Link>
          </div>
          <Link to="/socks">
            <div className="title">
              <span className="txt">양말</span>
              <span className="material-symbols-outlined arrow">
                chevron_right
              </span>
            </div>
          </Link>
          <div className="socks-wrap wrap" ref={(el) => (categoryRefs.current[5] = el)}>
            <Link to="/socks" className="w">
              <img src="../assets/socks.jpg" alt="긴 양말" />
              <span>긴 양말</span>
            </Link>
          </div>
          <Link to="/bag">
            <div className="title">
              <span className="txt">가방</span>
              <span className="material-symbols-outlined arrow">
                chevron_right
              </span>
            </div>
          </Link>
          <div className="bag-wrap wrap" ref={(el) => (categoryRefs.current[6] = el)}>
            <Link to="/bag" className="w">
              <img src="../assets/bag.jpg" alt="백팩" />
              <span>백팩</span>
            </Link>
          </div>
          <Link to="/cap">
            <div className="title">
              <span className="txt">모자</span>
              <span className="material-symbols-outlined arrow">
                chevron_right
              </span>
            </div>
          </Link>
          <div className="cap-wrap wrap" ref={(el) => (categoryRefs.current[7] = el)}>
            <Link to="/cap" className="w">
              <img src="../assets/cap.jpg" alt="볼캡" />
              <span>볼캡</span>
            </Link>
          </div>
          <Link to="/eyeware">
            <div className="title">
              <span className="txt">아이웨어</span>
              <span className="material-symbols-outlined arrow">
                chevron_right
              </span>
            </div>
          </Link>
          <div className="eyeware-wrap wrap" ref={(el) => (categoryRefs.current[8] = el)}>
            <Link to="/eyeware" className="w">
              <img src="../assets/eyeware.jpg" alt="안경" />
              <span>안경</span>
            </Link>
          </div>
          <Link to="/accessory">
            <div className="title">
              <span className="txt">주얼리</span>
              <span className="material-symbols-outlined arrow">
                chevron_right
              </span>
            </div>
          </Link>
          <div className="accessory-wrap wrap" ref={(el) => (categoryRefs.current[9] = el)}>
            <Link to="/accessory" className="w">
              <img src="../assets/acc.jpg" alt="목걸이" />
              <span>목걸이</span>
            </Link>
          </div>
        </div>
      </div>
    </section >
  );
};

export default CategoryPage;

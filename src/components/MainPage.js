import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { outerState } from "../recoil/atom";
import { iconsState } from "../recoil/atom";
import "../styles/mainpage.scss";

const MainPage = () => {
  const navigate = useNavigate();
  const outerItems = useRecoilValue(outerState);
  const icons = useRecoilValue(iconsState);

  return (
    <section id="main-page">
      <div className="main-slider">컴포넌트 따로해서 코드 관리</div>
      <div className="main-category-wrap">
        {icons.map((icon) => (
          <div
            key={icon.path}
            className="icon"
            onClick={() => navigate(icon.path)}
          >
            <img
              src={icon.src}
              alt={icon.alt}
            />
            <span className="txt">{icon.label}</span>
          </div>
        ))}
      </div>
      <div className="main-item-map-section">
        {outerItems.map((item) => (
          <div key={item.id} className="item">
            <img src={item.img} alt={item.name} />
            <div className="name">{item.name}</div>
            <div className="price">{item.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainPage;
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { iconsState } from "../recoil/atom";
import "../styles/innerCategoryComponent.scss";
const InnerCategoryComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const icons = useRecoilValue(iconsState);

  return (
    <section id="inner-category">
      <div className="inner-category-wrap">
        {icons.map((icon) => (
          <div
            key={icon.path}
            className={location.pathname === icon.path ? 'icon active' : 'icon'}
            onClick={() => navigate(icon.path)}
          >
            <img src={icon.src} alt={icon.alt} />
            <span className="txt">{icon.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InnerCategoryComponent;
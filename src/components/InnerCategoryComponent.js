import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { iconsState } from "../recoil/atom";
import "../styles/innerCategoryComponent.scss";

const InnerCategoryComponent = () => {
  const icons = useRecoilValue(iconsState);

  return (
    <section id="inner-category">
      <div className="inner-category-wrap">
        {icons.map((icon) => (
          <NavLink
            key={icon.path}
            to={icon.path}
            className={({ isActive }) => (isActive ? 'icon active' : 'icon')}
          >
            <img src={icon.src} alt={icon.alt} />
            <span className="txt">{icon.label}</span>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default InnerCategoryComponent;

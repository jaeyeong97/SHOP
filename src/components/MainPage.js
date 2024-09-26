import { NavLink, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { outerState, selectedItemState } from "../recoil/atom";
import { iconsState } from "../recoil/atom";
import "../styles/mainpage.scss";
import FavoriteButton from "./FavoriteBtn";

const MainPage = () => {
  const outerItems = useRecoilValue(outerState);
  const icons = useRecoilValue(iconsState);
  const [selectedItem, setSelectedItem] = useRecoilState(selectedItemState);
  const navigate = useNavigate();

  const handleClickItem = (item) => {
    setSelectedItem({ item, selectedSize: null, selectedColor: null });
    navigate(`/item/${item.id}`);
  };

  return (
    <section id="main-page">
      <div className="main-slider">컴포넌트 따로해서 recoil 관리</div>
      <div className="main-category-wrap">
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
      <div className="item-map-section">
        {outerItems.map((item) => (
          <div key={item.id} className="item" onClick={() => handleClickItem(item)}>
            <img src={item.img} alt={item.name} />
            <div className="name">{item.name}</div>
            <div className="price">{item.price}</div>
            <FavoriteButton item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainPage;
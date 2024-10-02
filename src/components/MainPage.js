import { NavLink, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { outerState, selectedItemState } from "../recoil/atom";
import { iconsState } from "../recoil/atom";
import Slider from "./Slider";
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
      <Slider />
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
      <div className="title">회원님을 위한 아우터 상품</div>
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
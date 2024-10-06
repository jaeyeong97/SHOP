import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectedItemState } from "../recoil/atom";
import FavoriteButton from "./FavoriteBtn";

const ItemMapping = ({ items, className }) => {

  const [selectedItem, setSelectedItem] = useRecoilState(selectedItemState);
  const navigate = useNavigate();

  const handleClickItem = (item) => {
    setSelectedItem({ item, selectedSize: null, selectedColor: null });
    navigate(`/item/${item.id}`);
  };

  return (
    <div className={`item-map-section ${className}`}>
      {items.map((item) => (
        <div key={item.id} className="item" onClick={() => handleClickItem(item)}>
          <img src={item.img} alt={item.name} />
          <div className="name">{item.name}</div>
          <div className="price">{item.price}</div>
          <FavoriteButton item={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemMapping;
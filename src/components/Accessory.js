import { useRecoilState, useRecoilValue } from "recoil";
import { accessoryState, selectedItemState } from "../recoil/atom";
import InnerCategoryComponent from "./InnerCategoryComponent";
import FavoriteButton from "./FavoriteBtn";
import { useNavigate } from "react-router-dom";
const Accessory = () => {
    const accessoryItems = useRecoilValue(accessoryState);
    const [selectedItem, setSelectedItem] = useRecoilState(selectedItemState);
    const navigate = useNavigate();

    const handleClickItem = (item) => {
        setSelectedItem({ item, selectedSize: null, selectedColor: null });
        navigate(`/item/${item.id}`);
    };

    return (
        <section id="accessory-page">
            <InnerCategoryComponent />
            <div className="item-map-section">
                {accessoryItems.map((item) => (
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

export default Accessory;
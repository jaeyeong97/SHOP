import { useRecoilState, useRecoilValue } from "recoil";
import { capState, selectedItemState } from "../recoil/atom";
import InnerCategoryComponent from "./InnerCategoryComponent";
import FavoriteButton from "./FavoriteBtn";
import { useNavigate } from "react-router-dom";

const Cap = () => {
    const capItems = useRecoilValue(capState);
    const [selectedItem, setSelectedItem] = useRecoilState(selectedItemState);
    const navigate = useNavigate();

    const handleClickItem = (item) => {
        setSelectedItem({ item, selectedSize: null, selectedColor: null });
        navigate(`/item/${item.id}`);
    };

    return (
        <section id="cap-page">
            <InnerCategoryComponent />
            <div className="item-map-section">
                {capItems.map((item) => (
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

export default Cap;
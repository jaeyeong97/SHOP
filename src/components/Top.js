import { useRecoilState, useRecoilValue } from "recoil";
import { selectedItemState, topState } from "../recoil/atom";
import InnerCategoryComponent from "./InnerCategoryComponent";
import FavoriteButton from "./FavoriteBtn";
import { useNavigate } from "react-router-dom";

const Top = () => {
    const topItems = useRecoilValue(topState);
    const [selectedItem, setSelectedItem] = useRecoilState(selectedItemState);
    const navigate = useNavigate();

    const handleClickItem = (item) => {
        setSelectedItem(item);
        navigate(`/item/${item.id}`);
    };

    return (
        <section id="top-page">
            <InnerCategoryComponent />
            <div className="item-map-section">
                {topItems.map((item) => (
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

export default Top;
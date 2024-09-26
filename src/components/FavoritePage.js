import { useRecoilState, useRecoilValue } from "recoil";
import { favoriteState, selectedItemState } from "../recoil/atom";
import FavoriteButton from "./FavoriteBtn";
import "../styles/favoritePage.scss";
import { useNavigate } from "react-router-dom";

const FavoritePage = () => {
    const favoriteArr = useRecoilValue(favoriteState);
    const [selectedItem, setSelectedItem] = useRecoilState(selectedItemState);
    const navigate = useNavigate();

    const handleClickItem = (item) => {
        setSelectedItem({ item, selectedSize: null, selectedColor: null });
        navigate(`/item/${item.id}`);
    };

    return (
        <section id="favorite-page">
            <div className="item-map-section">
                {favoriteArr.map((item) => (
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

export default FavoritePage;
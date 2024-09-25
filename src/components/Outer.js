import { useRecoilState, useRecoilValue } from "recoil";
import { outerState, selectedItemState } from "../recoil/atom";
import InnerCategoryComponent from "./InnerCategoryComponent";
import FavoriteButton from "./FavoriteBtn";
import { useNavigate } from "react-router-dom";

const Outer = () => {
    const outeritems = useRecoilValue(outerState);
    const [selectedItem, setSelectedItem] = useRecoilState(selectedItemState);
    const navigate = useNavigate();

    const handleClickItem = (item) => {
        setSelectedItem(item);
        navigate(`/item/${item.id}`);
    };

    return (
        <section id="outer-page">
            <InnerCategoryComponent />
            <div className="item-map-section">
                {outeritems.map((item) => (
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

export default Outer;
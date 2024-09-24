import { useRecoilValue } from "recoil";
import { shoesState } from "../recoil/atom";
import InnerCategoryComponent from "./InnerCategoryComponent";

const Top = () => {
    const shoesItems = useRecoilValue(shoesState);

    return (
        <section id="shoes-page">
            <InnerCategoryComponent />
            <div className="item-map-section">
                {shoesItems.map((item) => (
                    <div key={item.id} className="item">
                        <img src={item.img} alt={item.name} />
                        <div className="name">{item.name}</div>
                        <div className="price">{item.price}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Top;
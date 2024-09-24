import { useRecoilValue } from "recoil";
import { bagState } from "../recoil/atom";
import InnerCategoryComponent from "./InnerCategoryComponent";

const Bag = () => {
    const bagItems = useRecoilValue(bagState);

    return (
        <section id="bag-page">
            <InnerCategoryComponent />
            <div className="item-map-section">
                {bagItems.map((item) => (
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

export default Bag;
import { useRecoilValue } from "recoil";
import { accessoryState } from "../recoil/atom";
import InnerCategoryComponent from "./InnerCategoryComponent";
const Accessory = () => {
    const accessoryItems = useRecoilValue(accessoryState);

    return (
        <section id="accessory-page">
            <InnerCategoryComponent />
            <div className="item-map-section">
                {accessoryItems.map((item) => (
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

export default Accessory;
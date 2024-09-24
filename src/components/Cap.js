import { useRecoilValue } from "recoil";
import { capState } from "../recoil/atom";
import InnerCategoryComponent from "./InnerCategoryComponent";

const Cap = () => {
    const capItems = useRecoilValue(capState);

    return (
        <section id="cap-page">
            <InnerCategoryComponent />
            <div className="item-map-section">
                {capItems.map((item) => (
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

export default Cap;
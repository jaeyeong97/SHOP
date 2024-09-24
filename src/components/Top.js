import { useRecoilValue } from "recoil";
import { topState } from "../recoil/atom";
import InnerCategoryComponent from "./InnerCategoryComponent";

const Top = () => {
    const topItems = useRecoilValue(topState);

    return (
        <section id="top-page">
            <InnerCategoryComponent />
            <div className="item-map-section">
                {topItems.map((item) => (
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
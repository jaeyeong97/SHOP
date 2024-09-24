import { useRecoilValue } from "recoil";
import { pantsState } from "../recoil/atom";
import InnerCategoryComponent from "./InnerCategoryComponent";

const Top = () => {
    const pants = useRecoilValue(pantsState);

    return (
        <section id="pants-page">
            <InnerCategoryComponent />
            <div className="item-map-section">
                {pants.map((item) => (
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
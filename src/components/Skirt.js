import { useRecoilValue } from "recoil";
import { skirtState } from "../recoil/atom";
import InnerCategoryComponent from "./InnerCategoryComponent";

const Skirt = () => {
    const skirtItems = useRecoilValue(skirtState);

    return (
        <section id="skirt-page">
            <InnerCategoryComponent />
            <div className="item-map-section">
                {skirtItems.map((item) => (
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

export default Skirt;
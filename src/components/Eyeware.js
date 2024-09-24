import { useRecoilValue } from "recoil";
import { eyewareState } from "../recoil/atom";
import InnerCategoryComponent from "./InnerCategoryComponent";

const Eyeware = () => {
    const eyewareItems = useRecoilValue(eyewareState);

    return (
        <section id="eyeware-page">
            <InnerCategoryComponent />
            <div className="item-map-section">
                {eyewareItems.map((item) => (
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

export default Eyeware;
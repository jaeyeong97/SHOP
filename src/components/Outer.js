import { useRecoilValue } from "recoil";
import { outerState } from "../recoil/atom";
import InnerCategoryComponent from "./InnerCategoryComponent";

const Outer = () => {
    const outeritems = useRecoilValue(outerState);

    return (
        <section id="outer-page">
            <InnerCategoryComponent />
            <div className="item-map-section">
                {outeritems.map((item) => (
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

export default Outer;
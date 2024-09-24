import { useRecoilValue } from "recoil";
import { socksState } from "../recoil/atom";
import InnerCategoryComponent from "./InnerCategoryComponent";

const Socks = () => {
    const socksItems = useRecoilValue(socksState);

    return (
        <section id="socks-page">
            <InnerCategoryComponent />
            <div className="item-map-section">
                {socksItems.map((item) => (
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

export default Socks;
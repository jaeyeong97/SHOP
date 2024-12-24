import { useRecoilValue } from "recoil";
import { accessoryState } from "../recoil/atom";
import IconsNavigation from "../components/IconsNavigation";
import ItemMapping from "../components/ItemMapping";
const Accessory = () => {

  const accessoryItems = useRecoilValue(accessoryState);

  return (
    <section id="accessory-page">
      <IconsNavigation className="inner-category-wrap" />
      <ItemMapping items={accessoryItems} />
    </section>
  );
};

export default Accessory;
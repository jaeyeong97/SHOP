import { useRecoilValue } from "recoil";
import { bagState } from "../recoil/atom";
import ItemMapping from "../components/ItemMapping";
import IconsNavigation from "../components/IconsNavigation";

const Bag = () => {

  const bagItems = useRecoilValue(bagState);

  return (
    <section id="bag-page">
      <IconsNavigation className="inner-category-wrap" />
      <ItemMapping items={bagItems} />
    </section>
  );
};

export default Bag;
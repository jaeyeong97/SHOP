import { useRecoilValue } from "recoil";
import { bagState, Item } from "../recoil/atom";
import ItemMapping from "../components/ItemMapping";
import IconsNavigation from "../components/IconsNavigation";

const Bag: React.FC = () => {
  const bagItems = useRecoilValue<Item[]>(bagState);

  return (
    <section id="bag-page">
      <IconsNavigation className="inner-category-wrap" />
      <ItemMapping items={bagItems} />
    </section>
  );
};

export default Bag;

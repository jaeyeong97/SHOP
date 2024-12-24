import { useRecoilValue } from "recoil";
import { bagState } from "../recoil/atom";
import ItemMapping from "../components/ItemMapping";
import IconsNavigation from "../components/IconsNavigation";
import { Item } from "../Types";

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

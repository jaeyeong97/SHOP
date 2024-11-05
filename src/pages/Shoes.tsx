import { useRecoilValue } from "recoil";
import { Item, shoesState } from "../recoil/atom";
import ItemMapping from "../components/ItemMapping";
import IconsNavigation from "../components/IconsNavigation";

const Top: React.FC = () => {
  const shoesItems = useRecoilValue<Item[]>(shoesState);

  return (
    <section id="shoes-page">
      <IconsNavigation className="inner-category-wrap" />
      <ItemMapping items={shoesItems} />
    </section>
  );
};

export default Top;

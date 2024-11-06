import { useRecoilValue } from "recoil";
import { shoesState } from "../recoil/atom";
import { Item } from "../Types";
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

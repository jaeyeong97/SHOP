import { useRecoilValue } from "recoil";
import { topState } from "../recoil/atom";
import { Item } from "../Types";
import ItemMapping from "../components/ItemMapping";
import IconsNavigation from "../components/IconsNavigation";

const Top: React.FC = () => {
  const topItems = useRecoilValue<Item[]>(topState);

  return (
    <section id="top-page">
      <IconsNavigation className="inner-category-wrap" />
      <ItemMapping items={topItems} />
    </section>
  );
};

export default Top;

import { useRecoilValue } from "recoil";
import { pantsState } from "../recoil/atom";
import { Item } from "../Types";
import ItemMapping from "../components/ItemMapping";
import IconsNavigation from "../components/IconsNavigation";

const Top: React.FC = () => {
  const pantsItems = useRecoilValue<Item[]>(pantsState);

  return (
    <section id="pants-page">
      <IconsNavigation className="inner-category-wrap" />
      <ItemMapping items={pantsItems} />
    </section>
  );
};

export default Top;

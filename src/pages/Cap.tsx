import { useRecoilValue } from "recoil";
import { capState, Item } from "../recoil/atom";
import ItemMapping from "../components/ItemMapping";
import IconsNavigation from "../components/IconsNavigation";

const Cap: React.FC = () => {
  const capItems = useRecoilValue<Item[]>(capState);

  return (
    <section id="cap-page">
      <IconsNavigation className="inner-category-wrap" />
      <ItemMapping items={capItems} />
    </section>
  );
};

export default Cap;

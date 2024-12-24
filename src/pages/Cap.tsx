import { useRecoilValue } from "recoil";
import { capState } from "../recoil/atom";
import { Item } from "../Types";
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

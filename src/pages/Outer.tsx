import { useRecoilValue } from "recoil";
import { outerState } from "../recoil/atom";
import { Item } from "../Types";
import ItemMapping from "../components/ItemMapping";
import IconsNavigation from "../components/IconsNavigation";

const Outer: React.FC = () => {
  const outerItems = useRecoilValue<Item[]>(outerState);

  return (
    <section id="outer-page">
      <IconsNavigation className="inner-category-wrap" />
      <ItemMapping items={outerItems} />
    </section>
  );
};

export default Outer;

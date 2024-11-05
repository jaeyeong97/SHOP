import { useRecoilValue } from "recoil";
import { eyewareState, Item } from "../recoil/atom";
import ItemMapping from "../components/ItemMapping";
import IconsNavigation from "../components/IconsNavigation";

const Eyeware: React.FC = () => {
  const eyewareItems = useRecoilValue<Item[]>(eyewareState);

  return (
    <section id="eyeware-page">
      <IconsNavigation className="inner-category-wrap" />
      <ItemMapping items={eyewareItems} />
    </section>
  );
};

export default Eyeware;

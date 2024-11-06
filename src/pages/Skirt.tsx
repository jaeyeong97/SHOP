import { useRecoilValue } from "recoil";
import { skirtState } from "../recoil/atom";
import { Item } from "../Types";
import ItemMapping from "../components/ItemMapping";
import IconsNavigation from "../components/IconsNavigation";

const Skirt: React.FC = () => {
  const skirtItems = useRecoilValue<Item[]>(skirtState);

  return (
    <section id="skirt-page">
      <IconsNavigation className="inner-category-wrap" />
      <ItemMapping items={skirtItems} />
    </section>
  );
};

export default Skirt;

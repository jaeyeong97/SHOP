import { useRecoilValue } from "recoil";
import { skirtState } from "../recoil/atom";
import ItemMapping from "../components/ItemMapping";
import IconsNavigation from "../components/IconsNavigation";

const Skirt = () => {

  const skirtItems = useRecoilValue(skirtState);

  return (
    <section id="skirt-page">
      <IconsNavigation className="inner-category-wrap" />
      <ItemMapping items={skirtItems} />
    </section>
  );
};

export default Skirt;
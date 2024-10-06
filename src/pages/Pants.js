import { useRecoilValue } from "recoil";
import { pantsState } from "../recoil/atom";
import ItemMapping from "../components/ItemMapping";
import IconsNavigation from "../components/IconsNavigation";

const Top = () => {

  const pantsItems = useRecoilValue(pantsState);

  return (
    <section id="pants-page">
      <IconsNavigation className="inner-category-wrap" />
      <ItemMapping items={pantsItems} />
    </section>
  );
};

export default Top;
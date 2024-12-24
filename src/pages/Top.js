import { useRecoilValue } from "recoil";
import { topState } from "../recoil/atom";
import ItemMapping from "../components/ItemMapping";
import IconsNavigation from "../components/IconsNavigation";

const Top = () => {

  const topItems = useRecoilValue(topState);

  return (
    <section id="top-page">
      <IconsNavigation className="inner-category-wrap" />
      <ItemMapping items={topItems} />
    </section>
  );
};

export default Top;
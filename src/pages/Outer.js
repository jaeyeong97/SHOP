import { useRecoilValue } from "recoil";
import { outerState } from "../recoil/atom";
import ItemMapping from "../components/ItemMapping";
import IconsNavigation from "../components/IconsNavigation";

const Outer = () => {

  const outerItems = useRecoilValue(outerState);

  return (
    <section id="outer-page">
      <IconsNavigation className="inner-category-wrap" />
      <ItemMapping items={outerItems} />
    </section>
  );
};

export default Outer;
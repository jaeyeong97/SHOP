import { useRecoilValue } from "recoil";
import { capState } from "../recoil/atom";
import ItemMapping from "../components/ItemMapping";
import IconsNavigation from "../components/IconsNavigation";

const Cap = () => {

  const capItems = useRecoilValue(capState);

  return (
    <section id="cap-page">
      <IconsNavigation className="inner-category-wrap" />
      <ItemMapping items={capItems} />
    </section>
  );
};

export default Cap;
import { useRecoilValue } from "recoil";
import { eyewareState } from "../recoil/atom";
import ItemMapping from "../components/ItemMapping";
import IconsNavigation from "../components/IconsNavigation";

const Eyeware = () => {

  const eyewareItems = useRecoilValue(eyewareState);

  return (
    <section id="eyeware-page">
      <IconsNavigation className="inner-category-wrap" />
      <ItemMapping items={eyewareItems} />
    </section>
  );
};

export default Eyeware;
import { useRecoilValue } from "recoil";
import { socksState } from "../recoil/atom";
import ItemMapping from "../components/ItemMapping";
import IconsNavigation from "../components/IconsNavigation";

const Socks = () => {

  const socksItems = useRecoilValue(socksState);

  return (
    <section id="socks-page">
      <IconsNavigation className="inner-category-wrap" />
      <ItemMapping items={socksItems} />
    </section>
  );
};

export default Socks;
import { useRecoilValue } from "recoil";
import { socksState } from "../recoil/atom";
import { Item } from "../Types";
import ItemMapping from "../components/ItemMapping";
import IconsNavigation from "../components/IconsNavigation";

const Socks: React.FC = () => {
  const socksItems = useRecoilValue<Item[]>(socksState);

  return (
    <section id="socks-page">
      <IconsNavigation className="inner-category-wrap" />
      <ItemMapping items={socksItems} />
    </section>
  );
};

export default Socks;

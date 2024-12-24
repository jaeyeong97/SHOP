import { useRecoilValue } from "recoil";
import { shoesState } from "../recoil/atom";
import ItemMapping from "../components/ItemMapping";
import IconsNavigation from "../components/IconsNavigation";

const Top = () => {

  const shoesItems = useRecoilValue(shoesState);

  return (
    <section id="shoes-page">
      <IconsNavigation className="inner-category-wrap" />
      <ItemMapping items={shoesItems} />
    </section>
  );
};

export default Top;
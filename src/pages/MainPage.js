import { useRecoilValue } from "recoil";
import { allItemsState } from "../recoil/atom";
import Slider from "../components/Slider";
import ItemMapping from "../components/ItemMapping";
import IconsNavigation from "../components/IconsNavigation";

const MainPage = () => {
  const allItems = useRecoilValue(allItemsState);

  return (
    <section id="main-page">
      <Slider />
      <IconsNavigation className="main-category-wrap" />
      <div className="title">회원님을 위한 아우터 상품</div>
      <ItemMapping items={allItems} />
    </section>
  );
};

export default MainPage;
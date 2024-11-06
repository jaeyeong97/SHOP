import { useRecoilValue } from "recoil";
import { allItemsState } from "../recoil/atom";
import { Item } from "../Types";
import SliderComponent from "../components/SliderComponent";
import ItemMapping from "../components/ItemMapping";
import IconsNavigation from "../components/IconsNavigation";

const MainPage: React.FC = () => {
  const allItems = useRecoilValue<Item[]>(allItemsState);

  return (
    <section id="main-page">
      <SliderComponent />
      <IconsNavigation className="main-category-wrap" />
      <div className="title">회원님을 위한 추천 상품</div>
      <ItemMapping items={allItems} />
    </section>
  );
};

export default MainPage;

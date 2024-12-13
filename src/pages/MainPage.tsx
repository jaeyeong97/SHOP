import { useRecoilValue } from "recoil";
import { allItemsState } from "../recoil/atom";
import { Item } from "../Types";
import SliderComponent from "../components/SliderComponent";
import ItemMapping from "../components/ItemMapping";
import IconsNavigation from "../components/IconsNavigation";

const MainPage: React.FC = () => {
  const allItems = useRecoilValue<Item[]>(allItemsState);

  return (
    <main id="main-page">
      <SliderComponent />
      <IconsNavigation className="main-category-wrap" />
      <h3 className="title">회원님을 위한 추천 상품</h3>
      <ItemMapping items={allItems} />
    </main>
  );
};

export default MainPage;

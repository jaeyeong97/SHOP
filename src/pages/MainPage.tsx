import { useRecoilState, useRecoilValue } from "recoil";
import { allItemsState, appModalState } from "../recoil/atom";
import { Item } from "../Types";
import SliderComponent from "../components/SliderComponent";
import ItemMapping from "../components/ItemMapping";
import IconsNavigation from "../components/IconsNavigation";
import RecommendedItemSlider from "../components/RecommendedItemSlider";

const MainPage: React.FC = () => {
  const allItems = useRecoilValue<Item[]>(allItemsState);
  const [isToApp, setIsToApp] = useRecoilState<boolean>(appModalState);
  return (
    <main id="main-page">
      <SliderComponent />
      <IconsNavigation className="main-category-wrap" />
      <h3 className="title">회원님을 위한 추천 상품</h3>
      <RecommendedItemSlider />
      <button
        className="first-buy-btn"
        onClick={() => {
          setIsToApp(true);
        }}
      >
        첫구매 혜택 전체보기
      </button>
      <ItemMapping items={allItems} />
    </main>
  );
};

export default MainPage;

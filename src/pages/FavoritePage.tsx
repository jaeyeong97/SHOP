import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { favoriteState, Item } from "../recoil/atom";
import ItemMapping from "../components/ItemMapping";

const FavoritePage: React.FC = () => {
  const [favoriteArr, setFavoriteArr] = useRecoilState<Item[]>(favoriteState);

  // 로컬 스토리지에서 좋아요 로드함
  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    if (savedFavorites) {
      setFavoriteArr(savedFavorites);
    }
  }, [setFavoriteArr]);

  return (
    <section id="favorite-page">
      {/* 좋아요한 상품 있을때 */}
      {favoriteArr.length > 0 ? (
        <div className="fav-item-wrap">
          <div className="title">
            {favoriteArr.length}개의 찜한 상품이 있습니다.
          </div>
          <ItemMapping items={favoriteArr} />
        </div>
      ) : (
        // 좋아요한 상품 없을때
        <div className="no-fav-item-wrap">
          <span className="material-symbols-outlined icon">favorite</span>
          <span className="t1">좋아요한 상품이 없습니다</span>
          <span className="t2">하트를 눌러 마음에 드는 상품을 찜해보세요.</span>
        </div>
      )}
    </section>
  );
};

export default FavoritePage;

import { useRecoilState, useRecoilValue } from "recoil";
import { favoriteState, selectedItemState } from "../recoil/atom";
import FavoriteButton from "./FavoriteBtn";
import "../styles/favoritePage.scss";
import { useNavigate } from "react-router-dom";

const FavoritePage = () => {
  const favoriteArr = useRecoilValue(favoriteState);
  const [selectedItem, setSelectedItem] = useRecoilState(selectedItemState);
  const navigate = useNavigate();

  const handleClickItem = (item) => {
    setSelectedItem({ item, selectedSize: null, selectedColor: null });
    navigate(`/item/${item.id}`);
  };

  return (
    <section id="favorite-page">
      {/* 좋아요한 상품 있을때 */}
      {favoriteArr.length > 0 ?
        <div className="fav-item-wrap">
          <div className="title">{favoriteArr.length}개의 찜한 상품이 있습니다. </div>
          <div className="item-map-section fav-item-map-section">
            {favoriteArr.map((item) => (
              <div key={item.id} className="item" onClick={() => handleClickItem(item)}>
                <img src={item.img} alt={item.name} />
                <div className="name">{item.name}</div>
                <div className="price">{item.price}</div>
                <FavoriteButton item={item} />
              </div>
            ))}
          </div>
        </div>
        :
        // 좋아요한 상품 없을때
        <div className="no-fav-item-wrap">
          <span className="material-symbols-outlined icon">
            favorite
          </span>
          <span className="t1">좋아요한 상품이 없습니다</span>
          <span className="t2">하트를 눌러 마음에 드는 상품을 찜해보세요.</span>
        </div>
      }
    </section>
  );
};

export default FavoritePage;
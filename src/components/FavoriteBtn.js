import { useRecoilState } from "recoil";
import { favoriteState } from "../recoil/atom";
import { useState } from "react";

const FavoriteButton = ({ item }) => {
  const [favorites, setFavorites] = useRecoilState(favoriteState);
  const [favAlert, setFavAlert] = useState("");
  const [alertTimeout, setAlertTimeout] = useState(null);

  const toggleFavorite = (e) => {
    e.stopPropagation();

    const isFavorite = favorites.some(favorite => favorite.id === item.id);

    if (isFavorite) {
      // 이미 배열에 저장된 상태라면
      setFavorites(favorites.filter(favorite => favorite.id !== item.id));
      setFavAlert("'좋아요'에서 삭제했어요.");
    } else {
      // 배열에 없으면 저장하기
      setFavorites([...favorites, item]);
      setFavAlert("'좋아요'에 추가했어요.");
    }

    if (alertTimeout) {
      clearTimeout(alertTimeout);
    }
    const timeout = setTimeout(() => {
      setFavAlert("");
    }, 2000);
    setAlertTimeout(timeout);
  };

  return (
    <div>
      <span
        className={`material-symbols-outlined icon favorite ${favorites.some(favoriteItem => favoriteItem.id === item.id) ? 'active' : ''}`}
        onClick={toggleFavorite}
      >
        favorite
      </span>
      {favAlert && <div className="fav-alert">{favAlert}</div>}
    </div>
  );
};

export default FavoriteButton;


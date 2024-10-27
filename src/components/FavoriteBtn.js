import { useRecoilState } from "recoil";
import { favoriteState } from "../recoil/atom";
import { useEffect, useState } from "react";

const FavoriteButton = ({ item, favClassName }) => {
  const [favorites, setFavorites] = useRecoilState(favoriteState);
  const [favAlert, setFavAlert] = useState("");
  const [alertTimeout, setAlertTimeout] = useState(null);

  // 초기 로컬 스토리지에서 찜 목록 불러오기
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (savedFavorites) {
      setFavorites(savedFavorites);
    }
  }, [setFavorites]);

  const toggleFavorite = (e) => {
    e.stopPropagation();

    const isFavorite = favorites.some(favorite => favorite.id === item.id);

    let updatedFavorites;
    if (isFavorite) {
      // 이미 배열에 저장된 상태라면
      updatedFavorites = favorites.filter(favorite => favorite.id !== item.id);
      setFavAlert("'좋아요'에서 삭제했어요.");
    } else {
      // 배열에 없으면 저장하기
      updatedFavorites = [...favorites, item];
      setFavAlert("'좋아요'에 추가했어요.");
    }

    // 상태 업데이트 및 로컬 스토리지 저장
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

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
        className={`material-symbols-outlined icon favorite ${favorites.some(favoriteItem => favoriteItem.id === item.id) ? 'active' : ''} ${favClassName}`}
        onClick={toggleFavorite}
      >
        favorite
      </span>
      {favAlert && <div className="fav-alert">{favAlert}</div>}
    </div>
  );
};

export default FavoriteButton;


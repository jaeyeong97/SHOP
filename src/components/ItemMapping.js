import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedItemState } from "../recoil/atom";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteBtn";

const ITEMS_PER_PAGE = 8; // 한 번에 로드할 아이템 수

const ItemMapping = ({ items, className }) => {
  const [selectedItem, setSelectedItem] = useRecoilState(selectedItemState);
  const [displayedItems, setDisplayedItems] = useState([]); // 스크롤시 로드 아이템
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false); // 로딩 상태
  const navigate = useNavigate();

  // 스크롤 감지
  const { ref, inView } = useInView({
    delay: 500, // 로딩 스피너 안보여서 임시 딜레이
  });

  useEffect(() => {
    if (inView && hasNextPage() && !loading) {
      loadMoreItems();
    }
  }, [inView]);

  // 무한 스크롤
  const loadMoreItems = () => {
    if (loading) return; // 로딩 중이면 리턴
    setLoading(true); // 로딩 시작
    const nextPage = currentPage + 1;
    const newItems = items.slice(0, nextPage * ITEMS_PER_PAGE);
    setDisplayedItems(newItems);
    setCurrentPage(nextPage);
    setLoading(false); // 로딩 끝
  };

  // 초기 아이템 설정
  useEffect(() => {
    setDisplayedItems(items.slice(0, ITEMS_PER_PAGE));
  }, [items]);

  // 다음 페이지가 있는지 확인하는 함수
  const hasNextPage = () => {
    return currentPage * ITEMS_PER_PAGE < items.length;
  };

  const handleClickItem = (item) => {
    setSelectedItem({ item, selectedSize: null, selectedColor: null });
    navigate(`/item/${item.id}`);
  };

  return (
    <div className={`item-map-section ${className}`}>
      {displayedItems.map((item) => (
        <div key={item.id} className="item" onClick={() => handleClickItem(item)}>
          <img src={item.img} alt={item.name} />
          <div className="name">{item.name}</div>
          <div className="price">{item.price}</div>
          <FavoriteButton item={item} />
        </div>
      ))}
      <div ref={ref} className="loading">
        {hasNextPage() ? <img src="../assets/spinner.gif" alt="spinner" /> : ''}
      </div>
    </div>
  );
};

export default ItemMapping;
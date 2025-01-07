import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedItemState } from "../recoil/atom";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteBtn";
import { SelectedItem, Item } from "../Types";

const ITEMS_PER_PAGE = 9; // 한 번에 로드할 아이템 수

type ItemMappingProps = {
  items: Item[];
};

const ItemMapping: React.FC<ItemMappingProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] =
    useRecoilState<SelectedItem>(selectedItemState);
  const [displayedItems, setDisplayedItems] = useState<Item[]>([]); // 스크롤시 로드 아이템
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false); // 무한스크롤 로딩 상태
  const [changeImg, setChangeImg] = useState<string | null>(null); // 오버시 이미지 변경
  const [timeId, setTimeId] = useState<number | null>(null); // 이미지 오버시 0.3초 타이머
  const navigate = useNavigate();

  // 스크롤 감지
  const { ref, inView } = useInView({
    rootMargin: "0px 0px -90px 0px",
  });

  useEffect(() => {
    if (inView && hasNextPage() && !loading) {
      loadMoreItems();
    }
  }, [inView]);

  // 무한 스크롤
  const loadMoreItems = () => {
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

  const handleClickItem = (item: Item) => {
    setSelectedItem({
      ...item,
      selectedSize: null,
      selectedColor: null,
      quantity: 1,
    });
    navigate(`/item/${item.id}`);
  };
  const handleEnterImg = (itemId: string) => {
    if (timeId) clearTimeout(timeId);

    const time = window.setTimeout(() => {
      setChangeImg(itemId); // hover시 0.2초뒤에 이미지 변경
    }, 200);

    setTimeId(time);
  };

  const handleLeaveImg = () => {
    if (timeId) clearTimeout(timeId);

    setChangeImg(null);
  };

  return (
    <section className="item-map-section">
      {displayedItems.map((item: Item) => (
        <div
          key={item.id}
          className="item"
          tabIndex={0}
          onClick={() => handleClickItem(item)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleClickItem(item);
            }
          }}
        >
          <div className="item-img-wrap">
            <img
              className="item-img"
              src={changeImg === item.id ? item.sImgs[0] : item.img}
              alt={item.name}
              onMouseEnter={() => handleEnterImg(item.id)}
              onMouseLeave={handleLeaveImg}
            />
            <FavoriteButton item={item} />
          </div>
          <div className="name">{item.name}</div>
          <div className="price">
            <span className="sale">{item.sale}</span>
            {item.price.toLocaleString()}원
          </div>
        </div>
      ))}
      <div ref={ref} className="loading">
        {hasNextPage() ? (
          <img src="../assets/spinner.webp" alt="spinner" className="spinner" />
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default ItemMapping;

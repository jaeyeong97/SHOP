import { useRecoilState, useRecoilValue } from "recoil";
import { searchTermState, selectedItemState, filteredItemsSelector, cartState } from "../recoil/atom";
import FavoriteButton from "./FavoriteBtn";
import { useNavigate } from "react-router-dom";
import "../styles/searchPage.scss";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState); // 검색어 상태
  const [selectedItem, setSelectedItem] = useRecoilState(selectedItemState);
  const filteredItems = useRecoilValue(filteredItemsSelector); // 필터링된 아이템 목록
  const cartArr = useRecoilValue(cartState);
  const navigate = useNavigate();

  const handleClickItem = (item) => {
    setSelectedItem({ item, selectedSize: null, selectedColor: null });
    navigate(`/item/${item.id}`);
  };

  return (
    <section id="search-page">
      <div className="search-cart-wrap">
        <div className="search">
          <span className="material-symbols-outlined search-icon">search</span>
          <input
            type="text"
            placeholder="하나만 사도 무료배송"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // 검색어 변경
          />
        </div>
        <div className="cart" onClick={() => { navigate('/cart') }}>
          <span className="material-symbols-outlined cart-icon">
            shopping_cart
          </span>
          {cartArr.length > 0 ? <div className='dot'><span>{cartArr.length}</span></div> : ""}
        </div>
      </div>
      <div className="item-map-section search-item-map-section">
        {filteredItems.map((item) => (
          <div key={item.id} className="item" onClick={() => handleClickItem(item)}>
            <img src={item.img} alt={item.name} />
            <div className="name">{item.name}</div>
            <div className="price">{item.price}</div>
            <FavoriteButton item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchPage;

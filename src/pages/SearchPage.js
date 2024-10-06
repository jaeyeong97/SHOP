import { useRecoilState, useRecoilValue } from "recoil";
import { searchTermState, filteredItemsSelector, cartState, appModalState } from "../recoil/atom";
import { useNavigate } from "react-router-dom";
import ItemMapping from "../components/ItemMapping";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState); // 검색어 상태
  const [isAppModal, setIsAppModal] = useRecoilState(appModalState); // toApp 모달 on/off 상태
  const filteredItems = useRecoilValue(filteredItemsSelector); // 필터링된 아이템 목록
  const cartArr = useRecoilValue(cartState);
  const navigate = useNavigate();


  return (
    <section id="search-page">
      <div className={`search-cart-wrap ${isAppModal ? 'active' : ''}`}>
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
      <ItemMapping items={filteredItems} className="search-item-map-section" />
    </section>
  );
};

export default SearchPage;

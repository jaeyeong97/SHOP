import { useRecoilState, useRecoilValue } from "recoil";
import { cartState, appModalState, allItemsState } from "../recoil/atom";
import { Item } from "../Types";
import { useNavigate } from "react-router-dom";
import ItemMapping from "../components/ItemMapping";
import { useEffect, useState } from "react";

const SearchPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResult, setSearchResult] = useState<Item[]>([]); // 검색 결과
  const [recentSearches, setRecentSearches] = useState<string[]>([]); // 최근 검색어 저장
  const [isAppModal, setIsAppModal] = useRecoilState<boolean>(appModalState); // toApp 모달 on/off 상태
  const cartArr = useRecoilValue(cartState);
  const allItems = useRecoilValue<Item[]>(allItemsState);
  const navigate = useNavigate();

  useEffect(() => {
    const storedSearches =
      JSON.parse(localStorage.getItem("recentSearches") || "[]") || [];
    setRecentSearches(storedSearches);
  }, []);

  const searchFuction = () => {
    const filteredItems = allItems.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResult(filteredItems);

    // 최근 검색어 업데이트
    setRecentSearches((prev) => {
      const newRecentSearches = prev.filter((item) => item !== searchValue);
      const updatedSearches = [searchValue, ...newRecentSearches].slice(0, 5);

      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));

      return updatedSearches;
    });
  };

  const handleSearchEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!searchValue) return;

    if (e.key === "Enter") {
      searchFuction();
    }
  };

  return (
    <section id="search-page">
      <div className={`search-cart-wrap ${isAppModal ? "active" : ""}`}>
        <div className="search">
          <img
            src="/assets/search.svg"
            alt="검색 아이콘"
            className="search-icon"
          />
          <input
            type="text"
            placeholder="하나만 사도 무료배송"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleSearchEnter}
          />
        </div>
        <div
          className="cart"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <img
            src="/assets/cart.svg"
            alt="장바구니 아이콘"
            className="cart-icon"
          />
          {cartArr.length > 0 ? (
            <div className="dot">
              <span>{cartArr.length}</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {searchValue === "" ? (
        <div className="before-search-wrap">
          <div className="recent-searched">
            <div className="flex">
              <span className="t1">최근 검색어</span>
              <span
                className="t2"
                onClick={() => {
                  setRecentSearches([]);
                  localStorage.removeItem("recentSearches");
                }}
              >
                지우기
              </span>
            </div>
            <div className="searched">
              {recentSearches.map((searched, index) => (
                <div
                  key={index}
                  className="searched-item"
                  onClick={() => {
                    const filteredItems = allItems.filter((item) =>
                      item.name.toLowerCase().includes(searched.toLowerCase())
                    );
                    setSearchResult(filteredItems);
                    setSearchValue(searched);
                  }}
                >
                  {searched}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : searchResult.length > 0 ? (
        <ItemMapping items={searchResult} />
      ) : null}
    </section>
  );
};

export default SearchPage;

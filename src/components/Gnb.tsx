import { NavLink } from "react-router-dom";

const Gnb: React.FC = () => {
  return (
    <nav className="gnb">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? "active" : ""
            }
          >
            <div className="wrap">
              <img src="/assets/home.svg" alt="홈 아이콘" className="icon" />
              <span className="txt">홈</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? "active" : ""
            }
          >
            <div className="wrap">
              <img
                src="/assets/menu.svg"
                alt="카테고리 아이콘"
                className="icon"
              />
              <span className="txt">카테고리</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorite"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? "active" : ""
            }
          >
            <div className="wrap">
              <img src="/assets/fav.svg" alt="좋아요 아이콘" className="icon" />
              <span className="txt">좋아요</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-page"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? "active" : ""
            }
          >
            <div className="wrap">
              <img
                src="/assets/user.svg"
                alt="마이페이지 아이콘"
                className="icon"
              />
              <span className="txt">마이페이지</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Gnb;

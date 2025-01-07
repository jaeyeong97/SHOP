import { useRecoilState } from "recoil";
import { appModalState } from "../recoil/atom";
import { NavLink, useNavigate } from "react-router-dom";

type SectionHeaderProps = {
  title: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  const [isAppModal, setIsAppModal] = useRecoilState<boolean>(appModalState);
  const navigate = useNavigate();

  return (
    <header className={`common-header ${isAppModal ? "active" : ""}`}>
      <div className="back">
        <button onClick={() => navigate(-1)}>
          <img
            src="/assets/arrow666.svg"
            alt="화살표 아이콘"
            className="icon"
          />
        </button>
      </div>
      <h3 className="title">{title}</h3>
      <div className="wrap">
        <NavLink to="/search">
          <img src="/assets/search.svg" alt="검색 아이콘" className="icon" />
        </NavLink>
        <NavLink to="/">
          <img src="/assets/home666.svg" alt="홈 아이콘" className="icon" />
        </NavLink>
      </div>
    </header>
  );
};

export default SectionHeader;

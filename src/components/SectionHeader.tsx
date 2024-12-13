import { useRecoilState } from "recoil";
import { appModalState } from "../recoil/atom";
import { NavLink } from "react-router-dom";

type SectionHeaderProps = {
  title: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  const [isAppModal, setIsAppModal] = useRecoilState<boolean>(appModalState);

  return (
    <div className={`common-header ${isAppModal ? "active" : ""}`}>
      <div className="back">
        <NavLink to="/" className="material-symbols-outlined icon">
          arrow_back_ios
        </NavLink>
      </div>
      <h3 className="title">{title}</h3>
      <div className="wrap">
        <NavLink to="/search" className="material-symbols-outlined icon">
          search
        </NavLink>
        <NavLink to="/" className="material-symbols-outlined icon">
          home
        </NavLink>
      </div>
    </div>
  );
};

export default SectionHeader;

import { useRecoilState } from "recoil";
import { appModalState } from "../recoil/atom";
import { useNavigate } from "react-router-dom";

type SectionHeaderProps = {
  title: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  const [isAppModal, setIsAppModal] = useRecoilState<boolean>(appModalState);
  const navigate = useNavigate();

  return (
    <div className={`common-header ${isAppModal ? "active" : ""}`}>
      <div className="back" onClick={() => navigate(-1)}>
        <span className="material-symbols-outlined icon">arrow_back_ios</span>
      </div>
      <h3 className="title">{title}</h3>
      <div className="wrap">
        <span
          className="material-symbols-outlined icon"
          onClick={() => navigate("/search")}
        >
          search
        </span>
        <span
          className="material-symbols-outlined icon"
          onClick={() => navigate("/")}
        >
          home
        </span>
      </div>
    </div>
  );
};

export default SectionHeader;

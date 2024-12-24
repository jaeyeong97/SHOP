import { useRecoilState } from "recoil";
import { appModalState } from "../recoil/atom";
import { useNavigate } from "react-router-dom";

const SectionHeader = ({ title }) => {
  const [isAppModal, setIsAppModal] = useRecoilState(appModalState); // toApp 모달 on/off 상태
  const navigate = useNavigate();

  return (
    <div className={`common-header ${isAppModal ? 'active' : ''}`}>
      <div className="back" onClick={() => navigate(-1)}>
        <span className="material-symbols-outlined icon">
          arrow_back_ios
        </span>
      </div>
      <h3 className="title">{title}</h3>
      <div className="wrap">
        <span className="material-symbols-outlined icon" onClick={() => navigate("/search")}>
          search
        </span>
        <span className="material-symbols-outlined icon" onClick={() => navigate("/")}>
          home
        </span>
      </div>
    </div>
  )
};

export default SectionHeader;
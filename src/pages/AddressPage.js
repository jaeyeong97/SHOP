import SectionHeader from "../components/SectionHeader";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { addressFormState } from "../recoil/atom";

const AddressPage = () => {
  const [addressFormData, setAddressFormData] = useRecoilState(addressFormState); // 주소전체

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    navigate("/purchase");
  };

  return (
    <section id="address-page">
      <SectionHeader title={"배송지 추가"} />
      <div className="input-wrap">
        <div className="flex">
          <div className="title">우편번호</div>
          <input
            name="zonecode"
            className="input-no-typing zoncode-input"
            value={addressFormData.zonecode || ""}
            readOnly
          />
          <button
            className="zoncode-btn"
            onClick={() => navigate("/address-search")}
          >
            우편번호 찾기
          </button>
        </div>
        <div className="flex">
          <div className="title">주소지</div>
          <input
            name="address"
            className="input-no-typing"
            value={addressFormData.address || ""}
            readOnly
          />
        </div>
        <div className="flex">
          <div className="title">상세주소</div>
          <input
            name="detailAddress"
            value={addressFormData.detailAddress || ""}
            onChange={handleChange}
            placeholder="상세주소를 입력해주세요."
          />
        </div>
        <div className="flex">
          <div className="title">배송지명</div>
          <input
            name="addressName"
            value={addressFormData.addressName || ""}
            onChange={handleChange}
            placeholder="예) 집, 회사"
          />
        </div>
        <div className="flex">
          <div className="title">수령인</div>
          <input
            name="personName"
            value={addressFormData.personName || ""}
            onChange={handleChange}
            placeholder="이름을 입력해주세요."
          />
        </div>
        <div className="flex">
          <div className="title">휴대폰</div>
          <input
            name="phone"
            value={addressFormData.phone || ""}
            onChange={handleChange}
            placeholder="휴대폰 번호를 입력해주세요."
          />
        </div>
      </div>
      <div className="save-btn-wrap">
        <button className="save-btn" onClick={handleSave}>
          저장하기
        </button>
      </div>
    </section>
  );
};

export default AddressPage;
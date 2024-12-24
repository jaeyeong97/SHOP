import SectionHeader from "../components/SectionHeader";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { addressFormState } from "../recoil/atom";
import { useState } from "react";

const AddressPage = () => {
  const [addressFormData, setAddressFormData] = useRecoilState(addressFormState); // 주소전체

  const [alertMessage, setAlertMessage] = useState({
    zonecode: "",
    address: "",
    addressName: "",
    personName: "",
    phone: "",
  }); // 에러 관리
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // 타이핑시 form 업데이트
    if (name === "phone") {
      const onlyNumbers = value.replace(/\D/g, ""); // 숫자만 입력되게
      setAddressFormData((prevData) => ({
        ...prevData,
        [name]: onlyNumbers,
      }));
    } else {
      setAddressFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    // 타이핑시 에러 메세지 없앰
    setAlertMessage((prevMessage) => ({
      ...prevMessage,
      [name]: "",
    }));
  };

  // 주소 저장하기
  const handleSave = () => {
    let hasErrors = false;

    if (!addressFormData.zonecode) {
      setAlertMessage((prev) => ({ ...prev, zonecode: "필수입력 정보입니다!" }));
      hasErrors = true;
    }
    if (!addressFormData.address) {
      setAlertMessage((prev) => ({ ...prev, address: "필수입력 정보입니다!" }));
      hasErrors = true;
    }
    if (!addressFormData.addressName) {
      setAlertMessage((prev) => ({ ...prev, addressName: "필수입력 정보입니다!" }));
      hasErrors = true;
    }
    if (!addressFormData.personName || addressFormData.personName.length < 2) {
      setAlertMessage((prev) => ({ ...prev, personName: "2자 이상 입력해주세요!" }));
      hasErrors = true;
    }
    if (!addressFormData.phone) {
      setAlertMessage((prev) => ({ ...prev, phone: "필수입력 정보입니다!" }));
      hasErrors = true;
    }

    if (!hasErrors) {
      navigate("/purchase");
    }
  };

  return (
    <section id="address-page">
      <SectionHeader title={"배송지 추가"} />
      <div className="input-wrap">
        <div className="flex">
          <div className="title">우편번호</div>
          <input
            name="zonecode"
            className={`input-no-typing zoncode-input ${alertMessage.zonecode && 'alert-border'}`}
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
        {alertMessage.zonecode && <div className="alert">{alertMessage.zonecode}</div>}
        <div className="flex">
          <div className="title">주소지</div>
          <input
            name="address"
            className={`input-no-typing ${alertMessage.address && 'alert-border'}`}
            value={addressFormData.address || ""}
            readOnly
          />
        </div>
        {alertMessage.address && <div className="alert">{alertMessage.address}</div>}
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
            className={`${alertMessage.addressName && 'alert-border'}`}
            onChange={handleChange}
            placeholder="예) 집, 회사"
          />
        </div>
        {alertMessage.addressName && <div className="alert">{alertMessage.addressName}</div>}
        <div className="flex">
          <div className="title">수령인</div>
          <input
            name="personName"
            value={addressFormData.personName || ""}
            className={`${alertMessage.personName && 'alert-border'}`}
            onChange={handleChange}
            placeholder="이름을 입력해주세요."
          />
        </div>
        {alertMessage.personName && <div className="alert">{alertMessage.personName}</div>}
        <div className="flex">
          <div className="title">휴대폰</div>
          <input
            name="phone"
            value={addressFormData.phone || ""}
            className={`${alertMessage.phone && 'alert-border'}`}
            onChange={handleChange}
            placeholder="휴대폰 번호를 입력해주세요."
          />
        </div>
        {alertMessage.phone && <div className="alert">{alertMessage.phone}</div>}
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
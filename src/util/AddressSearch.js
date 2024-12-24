import DaumPostcode from 'react-daum-postcode';
import { useRecoilState } from 'recoil';
import { addressFormState } from '../recoil/atom';
import { useNavigate } from 'react-router-dom';

const AddressSearch = () => {
    const [formData, setFormData] = useRecoilState(addressFormState);

    const navigate = useNavigate();

    const handleComplete = (data) => {
        let fullAddress = data.address;
        if (data.addressType === 'R' && data.bname) {
            fullAddress += ` (${data.bname})`;
        }
        setFormData({
            address: fullAddress,
            zonecode: data.zonecode,
        })

        navigate("/address");
    };

    return <div className='address-modal'>
        <div className='address-header'>
            <div
                className="back"
                onClick={() => navigate(-1)}
                tabIndex={0}
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        navigate(-1);
                    }
                }}>
                <span className="material-symbols-outlined icon">
                    arrow_back_ios
                </span>
            </div>
            <div className='title'>우편번호 검색</div>
        </div>
        <DaumPostcode
            onComplete={handleComplete}
            style={{ height: '100%' }} />
    </div>;
}

export default AddressSearch;

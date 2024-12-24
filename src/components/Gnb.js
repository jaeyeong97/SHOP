import { NavLink } from 'react-router-dom';

const Gnb = () => {
  return (
    <nav className='gnb'>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            <div className='wrap'>
              <span className="material-symbols-outlined icon home">home</span>
              <span className='txt'>홈</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/category" className={({ isActive }) => (isActive ? 'active' : '')}>
            <div className='wrap'>
              <span className="material-symbols-outlined icon menu">menu</span>
              <span className='txt'>카테고리</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorite" className={({ isActive }) => (isActive ? 'active' : '')}>
            <div className='wrap'>
              <span className="material-symbols-outlined icon favorite">favorite</span>
              <span className='txt'>좋아요</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-page" className={({ isActive }) => (isActive ? 'active' : '')}>
            <div className='wrap'>
              <span className="material-symbols-outlined icon mypage">person</span>
              <span className='txt'>마이페이지</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Gnb;
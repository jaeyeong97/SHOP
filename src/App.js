import { RecoilRoot } from "recoil";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "../src/styles/common.scss";
import Gnb from "./components/Gnb";
import Header from "./components/Header";
import MainPage from './components/MainPage';
import CategoryPage from './components/CategoryPage';
import SearchPage from './components/SearchPage';
import FavoritePage from './components/FavoritePage';
import MyPage from "./components/MyPage";
import LoginPage from "./components/LoginPage";
import PrivateRoute from "./util/PrivateRoute";
import CartPage from "./components/CartPage";
import Top from "./components/Top";
import Pants from "./components/Pants";
import Outer from "./components/Outer"
import Shoes from "./components/Shoes"
import Skirt from "./components/Skirt"
import Eyeware from "./components/Eyeware"
import Socks from "./components/Socks"
import Bag from "./components/Bag"
import Cap from "./components/Cap"
import Accessory from "./components/Accessory"
import "./styles/commonCategoryInner.scss";

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <RecoilRoot>
        <Router>
          <Header />
          <Gnb />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login-page" element={<LoginPage />} />
            <Route path="/top" element={<Top />} />
            <Route path="/pants" element={<Pants />} />
            <Route path="/outer" element={<Outer />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/skirt" element={<Skirt />} />
            <Route path="/eyeware" element={<Eyeware />} />
            <Route path="/socks" element={<Socks />} />
            <Route path="/bag" element={<Bag />} />
            <Route path="/cap" element={<Cap />} />
            <Route path="/accessory" element={<Accessory />} />
            <Route path="/favorite" element={
              <PrivateRoute>
                <FavoritePage />
              </PrivateRoute>
            } />
            <Route path="/my-page" element={
              <PrivateRoute>
                <MyPage />
              </PrivateRoute>
            } />
          </Routes>
        </Router>
      </RecoilRoot>
    </GoogleOAuthProvider>
  );
}

export default App;

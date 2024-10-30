import { RecoilRoot } from "recoil";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from "./util/ScrollToTop";
import PrivateRoute from "./util/PrivateRoute";
import Gnb from "./components/Gnb";
import Header from "./components/Header";
import ItemModal from "./components/ItemModal";
import MainPage from './pages/MainPage';
import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';
import FavoritePage from './pages/FavoritePage';
import MyPage from "./pages/MyPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import Top from "./pages/Top";
import Pants from "./pages/Pants";
import Outer from "./pages/Outer"
import Shoes from "./pages/Shoes"
import Skirt from "./pages/Skirt"
import Eyeware from "./pages/Eyeware"
import Socks from "./pages/Socks"
import Bag from "./pages/Bag"
import Cap from "./pages/Cap"
import Accessory from "./pages/Accessory"
import PurchasePage from "./pages/PurchasePage";
import AddressPage from "./pages/AddressPage";
import AddressSearch from "./util/AddressSearch";

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <RecoilRoot>
        <Router>
          <ScrollToTop />
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
            <Route path="/item/:id" element={<ItemModal />} />
            <Route path="/purchase" element={<PurchasePage />} />
            <Route path="/address" element={<AddressPage />} />
            <Route path="/address-search" element={<AddressSearch />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </GoogleOAuthProvider>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import './style.scss'
import HomeWrapper from './pages/HomeWrapper';
import HomePage from './components/HomePage/HomePage';
import DashboardPage from './components/DashboardPage/DashboardPage';
import ProductPage from './components/ProductPage/ProductPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import Confirmation from './components/Confirmation/Confirmation';
import CanclePayment from './components/CanclePayment/CanclePayment';
import MessagesWrapper from './pages/MessagesWrapper';
import ErrorPage from './pages/ErrorPage';
import TermsPage from './components/TermsPage/TermsPage';
import CookiesPage from './components/CookiesPgae/CookiesPage';
import LegalPage from './components/LegalPage/LegalPage';
import Tariff from './components/Tariff/Tariff';

function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<HomeWrapper />}>
          <Route index element={<HomePage />} />
          <Route path='dashboard' element={<DashboardPage />} />
          <Route path='product' element={<ProductPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='registration' element={<RegistrationPage />} />
          <Route path="legal" element={<LegalPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="cookies" element={<CookiesPage />} />
          <Route path='tarifs' element={<Tariff />} />
        </Route>
        <Route path={`/messagges`} element={<MessagesWrapper />}>
          <Route path="confirmation" element={<Confirmation />} />
          <Route path="cancel-payment" element={<CanclePayment />} />
        </Route>
        <Route path='*' element={<ErrorPage />}></Route>
     </Routes>
    </>
  );
}

export default App;

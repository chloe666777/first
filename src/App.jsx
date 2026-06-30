import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import AppErrorBoundary from './components/AppErrorBoundary';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollReveal from './components/ScrollReveal';
import ScrollToTop from './components/ScrollToTop';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProcessPage from './pages/ProcessPage';
import ProductsPage from './pages/ProductsPage';
import SolutionsPage from './pages/SolutionsPage';

function AppRoutes() {
  const location = useLocation();

  return (
    <div className="route-enter" key={location.key}>
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <AppErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollReveal />
        <div className="page">
          <Header />
          <main className="page-main"><AppRoutes /></main>
          <Footer />
        </div>
      </BrowserRouter>
    </AppErrorBoundary>
  );
}

export default App;

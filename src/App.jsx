import { Routes, Route, useLocation } from "react-router"; // أضفنا useLocation
import Navbar from "./components/organisms/Navbar.jsx";
import Footer from "./components/organisms/Footer.jsx";
import Cart from "./components/pages/Cart.jsx";
import { Toaster } from "sonner";

import HomePage from "./components/pages/HomePage.jsx";
import Contact from "./components/pages/Contact.jsx";
import Products from "./components/pages/Products.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import SplashScreen from "./components/atoms/SplashScreen.jsx";
import { useEffect, useState } from "react";
import AdminDashboard from "./components/pages/AdminDashboard.jsx";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation(); // To get the current route

  // Determine if we're on the admin page
  const isAdminPage = location.pathname === "/admin-dashboard_ashiaa2026";

  useEffect(() => {
    document.title = "متجر أشياء";
    const timer = setTimeout(() => setShowSplash(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen />}

      {/* Only show the navbar if we're not on the admin page */}
      {!isAdminPage && <Navbar />}

      <ScrollToTop />

      <main>
        <Toaster
          richColors
          position="top-center"
          dir="rtl"
          toastOptions={{
            style: {
              fontFamily: "Almarai, sans-serif",
            },
          }}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/admin-dashboard_ashiaa2026"
            element={<AdminDashboard />}
          />
        </Routes>
      </main>

      {/* Only show the footer if we're not on the admin page */}
      {!isAdminPage && (
        <>
          <Footer />
          <Cart />
        </>
      )}
    </>
  );
}

export default App;

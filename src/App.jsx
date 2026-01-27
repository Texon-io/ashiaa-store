import { Routes, Route, useLocation } from "react-router-dom"; // IMPORTANT: Use react-router-dom
import { useEffect, useState } from "react";
import { Toaster } from "sonner";

// Organisms & Atoms
import Navbar from "./components/organisms/Navbar.jsx";
import Footer from "./components/organisms/Footer.jsx";
import SplashScreen from "./components/atoms/SplashScreen.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";

// Pages
import HomePage from "./components/pages/HomePage.jsx";
import Contact from "./components/pages/Contact.jsx";
import Products from "./components/pages/Products.jsx";
import AdminDashboard from "./components/pages/AdminDashboard.jsx";
import NotFound from "./components/pages/NotFound.jsx";
import Cart from "./components/pages/Cart.jsx";

/**
 * Main App Component:
 * AppContent Component:
 * This contains the main logic and layout.
 * It is separated to allow useLocation() to work correctly within the Router context.
 */
function AppContent() {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation(); // Now works because it's inside <BrowserRouter> (in main.jsx)

  // Check if current route is the admin dashboard to hide global UI elements
  const isAdminPage = location.pathname === "/admin-dashboard_ashiaa2026";

  useEffect(() => {
    // Set global document title
    document.title = "متجر أشياء";

    // Manage splash screen visibility
    const timer = setTimeout(() => setShowSplash(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 1. Brand Experience: Splash Screen */}
      {showSplash && <SplashScreen />}

      {/* 2. Global Navigation: Hidden on Admin Pages */}
      {!isAdminPage && <Navbar />}

      {/* 3. Utility: Reset scroll position on route change */}
      <ScrollToTop />

      {/* 4. Main Viewport */}
      <main>
        {/* Global Notification System */}
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

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />

          {/* Secured Admin Route */}
          <Route
            path="/admin-dashboard_ashiaa2026"
            element={<AdminDashboard />}
          />

          {/* Fallback: 404 Premium Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* 5. Global Footer & Overlays: Hidden on Admin Pages */}
      {!isAdminPage && (
        <>
          <Footer />
          <Cart />
        </>
      )}
    </>
  );
}

/**
 * Main App Component:
 * Serving as a clean entry point.
 */
function App() {
  return <AppContent />;
}

export default App;

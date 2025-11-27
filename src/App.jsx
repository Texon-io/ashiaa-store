import { Routes, Route } from "react-router";
import Navbar from "./components/organisms/Navbar.jsx";
import Footer from "./components/organisms/Footer.jsx";
import Cart from "./components/pages/Cart.jsx";
import { Toaster } from "sonner";

import HomePage from "./components/pages/HomePage.jsx";
import Contact from "./components/pages/Contact.jsx";
import Products from "./components/pages/Products.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import SplashScreen from "./components/atoms/SplashScreen.jsx"; // السبلاش
import { useEffect, useState } from "react";

function App() {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        document.title = "متجر بائعة الكتب";

        const timer = setTimeout(() => setShowSplash(false), 5000); // 5 ثواني
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showSplash && <SplashScreen />}


                <>
                    <Navbar />
                    <ScrollToTop />
                    <main>
                        <Toaster richColors position="top-center" />
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </main>
                    <Cart />
                    <Footer />
                </>
        </>
    );
}

export default App;

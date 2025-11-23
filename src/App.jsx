import { Outlet } from "react-router";

import Navbar from "./components/organisms/Navbar.jsx";

import Footer from "./components/organisms/Footer.jsx";
import Cart from "./components/pages/Cart.jsx";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Navbar />
      <main className={``}>
        <Toaster richColors position="top-right" />

        <Outlet />
      </main>
      <Cart />
      <Footer />
    </>
  );
}
export default App;

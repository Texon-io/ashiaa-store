import { Outlet } from "react-router";

import Navbar from "./components/molecules/Navbar.jsx";
import Footer from "./components/molecules/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
export default App;

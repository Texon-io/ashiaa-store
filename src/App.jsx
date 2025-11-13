import { Outlet } from "react-router";

import Navbar from "./components/organisms/Navbar.jsx";
import Footer from "./components/organisms/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main className={``}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default App;

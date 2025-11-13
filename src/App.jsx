import { Outlet } from "react-router";

import Navbar from "./components/organisms/Navbar.jsx";
import Footer from "./components/molecules/Footer.jsx";
import Button from "./components/atoms/Button.jsx";

function App() {
  return (
    <>
      <Navbar />

      <main className={`p-6 px-8 mt-14`}>
        <Outlet />
          <Button type={"link"} to={"/products"} variant={"dark"}>hi</Button>
      </main>

      <Footer />
    </>
  );
}
export default App;

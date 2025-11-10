import { Outlet } from "react-router";

import Navbar from "./components/molecules/Navbar.jsx";
import Footer from "./components/molecules/Footer.jsx";
import ProductCard from "./components/molecules/ProductCard.jsx";

function App() {

    const data={
        name:'s',
        price:'0.00',
    }
  return (
    <>
      <Navbar />


      <main className={`p-6 px-8`}>
        <ProductCard data={data}/>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
export default App;

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import './index.css'
import App from './App.jsx'
import HomePage from "./components/pages/HomePage.jsx";
import Contact from "./components/pages/Contact.jsx"
import Products from "./components/pages/Products.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<App />}>
                <Route index element={<HomePage />}/>
                <Route path={"products"} element={<Products/>}/>
                <Route path={"contact"} element={<Contact/>}/>
            </Route>
        </Routes>

      </BrowserRouter>
  </StrictMode>
)

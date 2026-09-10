import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TrustSection from "./components/TrustSection/TrustSection";
import Categories from "./components/Categories/Categories";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Roles from "./components/Roles/Roles";
import Benefits from "./components/Benefits/Benifits";
import OrderJourney from "./components/OrderJourney/OrderJourney";
import Security from "./components/Security/Security";
import Growth from "./components/Growth/Growth";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import "./App.css";

function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustSection />
        <Categories />
        <HowItWorks/>
        <Roles/>
        <FeaturedProducts/>
        <Benefits/>
        <OrderJourney/>
        <Security/>
        <Growth/>
        <CTA/>
        <Footer/>
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* GlobalMart Landing Page */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* GlobalMart Login Page */}
        <Route
          path="/login"
          element={<Login />}
        />

                {/* Registration */}
        <Route
          path="/register"
          element={<Register />}
        />

      </Routes>
    </BrowserRouter>
  );
}


export default App;
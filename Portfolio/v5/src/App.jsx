import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { Family } from "./components/Launay";
// Components
import Loader from "./components/Loader";
import NavBar from "./components/Nav";
import Portfolio from "./pages/Portfolio";

export const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Portfolio />} />
              <Route exact path="/launay" element={<Family />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </>
      )}
    </>
  );
};

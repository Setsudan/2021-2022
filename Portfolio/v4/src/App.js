import Home from "./pages/Home";
import NavMenu from "./Nav";
import ProjectPage from "./pages/Project";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/404";
import Ps from "./pages/Ps";
const App = () => {
  console.log(window.screen.width);
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} exact />
          <Route path="/NavMenu" element={<NavMenu />} exact />
          <Route path="/Web-Projects" element={<ProjectPage />} exact />
          <Route path="/Visual-Projects" element={<Ps />} exact />
        </Routes>
      </Router>
    </div>
  );
};
export default App;

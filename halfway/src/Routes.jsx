import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "./pages/Client/index";
import { AuthIndex, Auth } from "./pages/auth/Index";
import { PersonnalCode } from "./pages/Client/PersonnalCode";
import { CheckoutList } from "./pages/Client/CheckoutList";
import { Profile } from "./pages/Client/Profile";
import { Nav } from "./components/NavBar";
const loggedIn = true;
/*
Fonction répartissant les chemin et les pages
*/
export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={loggedIn ? <Index /> : <AuthIndex />}
          />
          <Route path="/auth" exact element={<Auth />} />
          <Route path="/personnalcode" exact element={<PersonnalCode />} />
          <Route path="/checkoutlist" exact element={<CheckoutList />} />
          <Route path="/checkoutlist/:id" exact element={<CheckoutList />} />
          <Route path="/profile" exact element={<Profile />} />
          {/* <Route path="*" element={<FourOFour />} /> */}
        </Routes>
        <Nav type={"client"} />
      </BrowserRouter>
    </>
  );
}

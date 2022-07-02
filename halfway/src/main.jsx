import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Routes";
import "./styles/index.scss";

// Pwa code
/*
Détecte si le code sur l'appareil est le même que celui en ligne
Continue en téléchargeant le code pour le mode hors ligne
*/
import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {
    window.history.forward(1);
  },
  onOfflineReady() {
    alert("L'app est prête à tourner hors-ligne");
  },
  onRegistered(r) {
    r &&
      setInterval(() => {
        r.update();
      }, 60 * 60 * 1000);
  },
});
// on page load call updateSW
updateSW();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* If screen width is superior to 600px then we put a message */}
    {window.innerWidth < 600 ? (
      <Router />
    ) : (
      <h1>Ce site est prévu pour une utilisation sur mobile</h1>
    )}
  </React.StrictMode>
);

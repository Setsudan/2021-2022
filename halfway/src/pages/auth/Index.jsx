import AppleLogo from "../../img/apple.png";
import FacebookLogo from "../../img/facebook.png";
import GoogleLogo from "../../img/google.png";
import { useState } from "react";
import SignUpPage from "./Signup";
import { Login } from "./Login";
export const AuthIndex = () => {
  // lambda means good old connection with mail and password without using third-parties
  // so if lambda is true, we will display the login page that use the email-password type of login/register page
  const [lambda, setLambda] = useState(true);
  const toggleLambda = () => {
    if (lambda) {
      setLambda(false);
    } else {
      setLambda(true);
    }
  };
  return (
    <main id="AuthPage">
      {lambda ? (
        <>
          <h1>
            Half<span>Way</span>
          </h1>
          <button className="externLogin auth-option">
            <img src={GoogleLogo} alt="" /> se connecter avec Google
          </button>
          <button className="externLogin auth-option">
            <img src={FacebookLogo} alt="" /> se connecter avec Facebook
          </button>
          <button className="externLogin auth-option">
            <img src={AppleLogo} alt="" /> se connecter avec Apple
          </button>
          <hr />
          <button
            onClick={() => {
              toggleLambda();
            }}
            className="auth-option"
          >
            Se connecter à l'ancienne
          </button>
        </>
      ) : (
        <Auth />
      )}
    </main>
  );
};
// This decides what to display
// Either the login page or the signup page
export const Auth = () => {
  const [auth, setAuth] = useState(false);

  const toggleAuth = () => {
    if (auth) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  };
  return (
    <>
      {auth ? <Login /> : <SignUpPage />}
      <span onClick={() => toggleAuth()}>
        {auth ? "Créer un compte" : "Se connecter"}
      </span>
    </>
  );
};

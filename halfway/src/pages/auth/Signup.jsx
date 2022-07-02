import { useState } from "react";

// Same as the login page, this is a dummy dum page
// It's not fonctionnal at all it's just here to be here
// This is how we would have done it for it to work
// Go line 91 to see the code that is shown on the page (CTRL + g)
/*
Signup using supabase 
export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);

  call supabase to signup on button submit
  const signup = () => {
    setLoading(true);
    supabase
      .auth()
      .signup(email, password)
      .then(() => {
        setLoading(false);
        setSuccess("Vous êtes bien inscrit");
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }
  return(
    <main id="SignupPage">
      <h1>
        Half<span>Way</span>
      </h1>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }
          }
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }
          }
        />
        <label htmlFor="passwordConfirm">Confirm Password</label>
        <input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={(e) => {
            setPasswordConfirm(e.target.value);
          }
          }
        />
        <button type="submit" onClick={() => {
          setLoading(true);
          signup();
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        }
        }>
          {loading ? "Loading..." : "Signup"}
        </button>
      </form>
      <p>{error}</p>
      <p>{success}</p>
    </main>
  );
}
  )
*/

export default function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [password, setPassword] = useState("");

  const handleFN = (e) => {
    setFirstName(e.target.value);
  };
  const handleLN = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleAdress = (e) => {
    setAdress(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = () => {
    console.log(firstName, lastName, email, adress, password);
  };
  return (
    <>
      <label htmlFor="lastName">Nom de famille</label>
      <input
        type="text"
        name="LastName"
        id=""
        value={lastName}
        onChange={handleLN}
      />
      <label htmlFor="FirstName">Prénom</label>
      <input
        type="text"
        name="FirstName"
        id=""
        value={firstName}
        onChange={handleFN}
      />
      <label htmlFor="Mail">E-Mail</label>
      <input
        type="email"
        name="Mail"
        id=""
        value={email}
        onChange={handleEmail}
      />
      <label htmlFor="Password">Mot de passe</label>
      <input
        type="password"
        name="Password"
        id=""
        value={password}
        onChange={handlePass}
      />
      <label htmlFor="Adresse">Adresse</label>
      <input type="text" name="Adress" value={adress} onChange={handleAdress} />
      <button onClick={() => handleSignUp()}>Rejoindre Halfway</button>
    </>
  );
}

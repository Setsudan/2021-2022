import { useState } from "react";

// This is the login page but a dummy dumb one.
// It's not fonctionnal at all it's just here to be here
// Go line 68 to see the code that is shown on the page (CTRL + g)
/*
Login page using supabase
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  call supabase to login on button submit
  const login = () => {
    setLoading(true);
    supabase
      .auth()
      .login(email, password)
      .then(() => {
        setLoading(false);
      })
      .catch(console.error);
  }
  return(
    <main id="LoginPage">
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
        <button type="submit" onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        }
        }>
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </main>
  );
}

  )
*/
export const Login = () => {
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");

  const handleUid = (e) => {
    setUid(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    console.log("... Supabase init");
  };
  return (
    <>
      <input type="text" name="uid" value={uid} onChange={handleUid} />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handlePass}
      />
      <button onClick={() => handleLogin()}>Se connecter</button>
    </>
  );
};

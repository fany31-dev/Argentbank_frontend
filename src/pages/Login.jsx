import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchLoginUser } from "../redux/auth/authThunks";
import { loginUser, setToken, loginError } from "../redux/auth/authSlice";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("password456"); // ne pas oublier de supprimer //

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser());

    try {
      const response = await fetchLoginUser(username, password);
      const token = response;
      // Si erreur API → on reste sur /login
      if (!response || response.error) {
        dispatch(loginError("Identifiants invalides"));
        return;
      }

      // On stocke le token
      dispatch(setToken(token));
      sessionStorage.setItem("token", token);

      // Redirection
      window.location.href = "/profile";
    } catch (error) {
      console.error("ERREUR API :", error);
      dispatch(loginError("Erreur serveur"));
    }
  };

  return (
    <main className="main bg-dark flex">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="email"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default Login;

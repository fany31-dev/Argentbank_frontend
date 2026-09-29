import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLoginUser } from "../redux/auth/authThunks";
import { fetchUserProfile } from "../redux/user/userThunks";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, status, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("password456"); // ne pas oublier de supprimer //

  const handleSubmit = async (e) => {
    e.preventDefault();

    // On envoie email + password au thunk
    dispatch(authLoginUser({ email, password }));
  };
  // Quand Redux reçoit le token → redirection automatique
  useEffect(() => {
    if (token) {
      navigate("/profile");
      dispatch(fetchUserProfile);
    }
  }, [token, navigate]);

  return (
    <main className="main bg-dark flex">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <button className="sign-in-button" disabled={status === "loading"}>
            {status === "loading" ? "En cours de connexion ..." : "Sign In"}
          </button>
          <div>
            {status === "failed" && <p className="message-error">{error}</p>}
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;

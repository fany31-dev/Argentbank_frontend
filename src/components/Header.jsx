import LogoArgentBank from "@/assets/argentBankLogo.webp";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButton from "./LogoutButton";

function Header() {
  const { token } = useSelector((state) => state.auth);

  return (
    <>
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={LogoArgentBank}
            alt="Argent Bank Logo"
          />
        </Link>
        <h1 className="sr-only">Argent Bank</h1>
        <div>
          {token ? (
            <LogoutButton />
          ) : (
            <Link to="/login" className="main-nav-item ">
              <i className="fa fa-user-circle style-sign-icon"></i>
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;

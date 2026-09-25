import { Link } from "react-router-dom";
import IconLogout from "@/assets/power-off-solid.png";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Link className="logout-button" onClick={handleLogout}>
      <img className="logout-icon" src={IconLogout} alt="icone out" /> Log Out
    </Link>
  );
}

export default LogoutButton;

import { Link } from "react-router-dom";
import IconLogout from "@/assets/power-off-solid.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile } from "../redux/user/userThunks";

function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userName } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    dispatch(fetchUserProfile);
  };

  return (
    <>
      <div className="main-nav-item-login">
        <div>{userName || "test"} </div>
        <i className="fa fa-user-circle style-sign-icon"></i>
        <Link className="logout-button" onClick={handleLogout}>
          <img className="logout-icon" src={IconLogout} alt="icone out" /> Log
          Out
        </Link>
      </div>
    </>
  );
}

export default LogoutButton;

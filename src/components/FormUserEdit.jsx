import { useState } from "react";
import { useSelector } from "react-redux";
import toggleEdit from "../pages/Profile";

function FormEditUserInfo() {
  const { firstName, lastName } = useSelector((state) => state.user);
  const [userName, setuserName] = useState("");

  return (
    <section>
      <div className="edit-user-content">
        <h1 className="edit-user-title">Edit user info</h1>
        <form>
          <div className="edit-input-wrapper">
            <label htmlFor="username">User name : </label>
            <input
              type="text"
              id="username"
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
              autoComplete="username"
            />
          </div>
          <div className="edit-input-wrapper">
            <label htmlFor="firstname">First name : </label>
            <input
              type="text"
              id="firstname"
              value={firstName}
              autoComplete="firstname"
              disabled
            />
          </div>
          <div className="edit-input-wrapper">
            <label htmlFor="firstname">Last name : </label>
            <input
              type="text"
              id="lastname"
              value={lastName}
              autoComplete="lastname"
              disabled
            />
          </div>
          <div className="edit-buttons">
            <button type="button" className="edit-buttons">
              Save
            </button>
            <button className="edit-buttons" onClick={toggleEdit}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default FormEditUserInfo;

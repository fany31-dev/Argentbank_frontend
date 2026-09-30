import { useState } from "react";
import { useSelector } from "react-redux";
import toggleEdit from "../pages/Profile";

function FormEditUserInfo() {
  const { firstName, lastName } = useSelector((state) => state.user);
  const [userName, setuserName] = useState("");

  return (
    <section>
      <div>
        <h1>Edit user info</h1>
        <form>
          <div>
            <label htmlFor="username">User name</label>
            <input
              type="text"
              id="username"
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
              autoComplete="username"
            />
          </div>
          <div>
            <label htmlFor="firstname">First name</label>
            <input
              type="text"
              id="firstname"
              value={firstName}
              autoComplete="firstname"
              disabled
            />
          </div>
          <div>
            <label htmlFor="firstname">Last name</label>
            <input
              type="text"
              id="lastname"
              value={lastName}
              autoComplete="lastname"
              disabled
            />
          </div>
          <button type="button" className="edit-button">
            Save
          </button>
          <button className="edit-button" onClick={toggleEdit}>
            Cancel
          </button>
        </form>
      </div>
    </section>
  );
}

export default FormEditUserInfo;

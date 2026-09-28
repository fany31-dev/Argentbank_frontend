import { useState } from "react";
import { useSelector } from "react-redux";
import { fetchUserProfile } from "./userThunks";

function FormEditUserInfo() {
  const { firstName, lastName, userName } = useSelector((state) => state.auth);
  const [username, setUsername] = useState(userName || "");

  const handleUsernameEdit = async (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <h1>Edit user info</h1>
      <form onSubmit={handleUsernameEdit}>
        <div>
          <label htmlFor="username">User name</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />
        </div>
        <div>
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            id="firstname"
            value={firstName}
            autoComplete="current-password"
            disabled
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstname">Last name</label>
          <input
            type="text"
            id="lastname"
            value={lastName}
            autoComplete="lastname"
            disabled
          />
        </div>
        <button className="sign-in-button">Save</button>
        <button type="button" className="sign-in-button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </section>
  );
}

export default FormEditUserInfo;

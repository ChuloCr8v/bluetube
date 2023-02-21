import React from "react";
import { useDispatch } from "react-redux";
import styles from "../styles/UserMenu.module.scss";
import { signOut } from "../pages/redux/userSlice";

const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    try {
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.user_menu}>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;

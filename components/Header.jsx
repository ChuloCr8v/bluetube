import styles from "../styles/Header.module.scss";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import Button from "./Button";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import Avatar from "./Avatar";
import UserMenu from "./UserMenu";

const Header = () => {
  const [showSearchField, setShowSearchField] = useState(false);

  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo_wrapper}>
        <YouTubeIcon className={styles.logo} />
        <p className={styles.logo_text}>BluTube</p>
      </Link>
      <div className={styles.search_wrapper}>
        {showSearchField ? (
          <input
            type="text"
            placeholder="Search"
            className={styles.search_field}
          />
        ) : (
          ""
        )}
        <SearchIcon
          className={styles.icon}
          onClick={() => setShowSearchField(!showSearchField)}
        />
      </div>
      {currentUser ? (
        <div className={styles.user_profile}>
          <Avatar />
          <p style={{ color: "white" }}>{currentUser.others.username}</p>
          <UserMenu />
        </div>
      ) : (
        <Button url="/login" text="Login" bgColor="green" textColor="white" />
      )}
    </header>
  );
};

export default Header;

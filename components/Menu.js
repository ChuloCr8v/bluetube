import Link from "next/link";
import styles from "../styles/Menu.module.scss";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import PlusIcon from "@mui/icons-material/Add";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ArticleIcon from "@mui/icons-material/Article";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpIcon from "@mui/icons-material/Help";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useSelector } from "react-redux";
import Button from "./Button";

const Menu = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.logo_wrapper}>
       <YouTubeIcon className={styles.logo} />
       <p className={styles.logo_text} >BluTube</p>
     </div> */}
      <ol className={styles.menu}>
        <li className={styles.menu_item}>
          <HomeIcon className={styles.icon} />
          <Link href="/">Home</Link>
        </li>
        <li className={styles.menu_item}>
          <ExploreIcon className={styles.icon} />
          <Link href="/">Explore</Link>
        </li>
        {currentUser ? (
          <li className={styles.menu_item}>
            <PlusIcon className={styles.icon} />
          </li>
        ) : (
          <Button url="/login" text="Login" bgColor="green" textColor="white" />
        )}
        <li className={styles.menu_item}>
          <SubscriptionsIcon className={styles.icon} />
          <Link href="/">Subscriptions</Link>
        </li>

        <li className={styles.menu_item}>
          <LibraryMusicIcon className={styles.icon} />
          <Link href="/">Library</Link>
        </li>
        <li className={styles.menu_item}>
          <HistoryIcon className={styles.icon} />
          <Link href="/">History</Link>
        </li>

        <li className={styles.sign_in_wrapper}>
          <p className={styles.sign_in_text}>
            Sign in to like videos, comment and subscribe{" "}
          </p>
          <Link href="/" className={styles.btn}>
            Sign In
          </Link>
        </li>

        <li className={styles.menu_item}>
          <LibraryMusicIcon className={styles.icon} />
          <Link href="/">Music</Link>
        </li>
        <li className={styles.menu_item}>
          <SportsBasketballIcon className={styles.icon} />
          <Link href="/">Sports</Link>
        </li>
        <li className={styles.menu_item}>
          <SportsEsportsIcon className={styles.icon} />
          <Link href="/">Gaming</Link>
        </li>
        <li className={styles.menu_item}>
          <MovieCreationIcon className={styles.icon} />
          <Link href="/">Movies</Link>
        </li>
        <li className={styles.menu_item}>
          <ArticleIcon className={styles.icon} />
          <Link href="/">News</Link>
        </li>
        <li className={styles.menu_item}>
          <LiveTvIcon className={styles.icon} />
          <Link href="/">Live</Link>
        </li>

        <li className={styles.menu_item}>
          <SettingsIcon className={styles.icon} />
          <Link href="/">Settings</Link>
        </li>
        <li className={styles.menu_item}>
          <FlagIcon className={styles.icon} />
          <Link href="/">Support</Link>
        </li>
        <li className={styles.menu_item}>
          <HelpIcon className={styles.icon} />
          <Link href="/">Help</Link>
        </li>
        <li className={styles.menu_item}>
          <SettingsBrightnessIcon className={styles.icon} />
          <Link href="/">Light Mode</Link>
        </li>
      </ol>
    </div>
  );
};

export default Menu;

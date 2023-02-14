import styles from '../styles/Header.module.scss'
import YouTubeIcon from '@mui/icons-material/YouTube'
import SearchIcon from '@mui/icons-material/Search';
import Button from './Button'
import Link from 'next/link'
import {useState} from 'react'

const Header = () => {
  
  const [showSearchField, setShowSearchField] = useState(false)
  
  return(
    <header className={styles.header}>
      <Link href="/" className={styles.logo_wrapper}>
        <YouTubeIcon className={styles.logo} />
        <p className={styles.logo_text} >BluTube</p>
      </Link>
      <div className={styles.search_wrapper}>
        {showSearchField ? <input type="text" placeholder="Search" className={styles.search_field} /> : ''} 
        <SearchIcon className={styles.icon} onClick={() => setShowSearchField(!showSearchField)} />
      </div>
      <Button url="/login" text="Login" bgColor="green" textColor="white" />
    </header>
  )
}

export default Header 
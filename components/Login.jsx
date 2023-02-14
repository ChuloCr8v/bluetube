import styles from '../styles/Login.module.scss'
import Button from './Button'

const Login = (props) => {
  
  const handleClick = (e) => {
    e.preventDefault()
    props.setShowRegisterForm(!props.showRegisterForm) 
  } 
  
  return (
    <div className={props.showRegisterForm ? styles.hide_login : styles.login}>
      <div className={styles.wrapper}>
      <form className={styles.form}>
        <div className={styles.form_group}>
         <label htmlFor="email">Email</label>
         <input type="text" placeholder="Email" />
        </div>
        <div className={styles.form_group}>
         <label htmlFor="email">Password</label>
         <input type="password" placeholder="Password" />
        </div>
        <button text="Submit" className={styles.btn}>Login</button>
        <button className={styles.btn} onClick={handleClick} >Register</button>
      </form>
      </div>
    </div>
  )
}

export default Login
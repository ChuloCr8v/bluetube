import styles from '../styles/Login.module.scss'
import Button from './Button'

const Register = (props) => {
  
  const handleClick = (e) => {
    e.preventDefault()
    props.setShowRegisterForm(!props.showRegisterForm) 
  } 
  return (
    <div className={props.showRegisterForm ? styles.register : styles.hide_register}>
      <div className={styles.wrapper}>
      <form className={styles.form}>
        <div className={styles.form_group}>
         <label htmlFor="firstName">First Name</label>
         <input type="text" placeholder="First Name" />
        </div>
        <div className={styles.form_group}>
         <label htmlFor="lastName">Last Name</label>
         <input type="text" placeholder="Last Name" />
        </div>
        <div className={styles.form_group}>
         <label htmlFor="email">Email</label>
         <input type="text" placeholder="Email" />
        </div>
        <div className={styles.form_group}>
         <label htmlFor="email">Password</label>
         <input type="password" placeholder="Password" />
        </div>
        <div className={styles.form_group}>
         <label htmlFor="confirmPassword">Confirm Password</label>
         <input type="password" placeholder="Confirm Password" />
        </div>
        <button className={styles.btn}>Login</button>
        <button className={styles.btn} onClick={handleClick} >Register</button>
      </form>
      </div>
    </div>
  )
}

export default Register 
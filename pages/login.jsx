import styles from '../styles/LoginPage.module.scss'
import LoginComponent from '../components/Login'
import RegisterComponent from '../components/Register'
import {useState} from 'react'

const Login = () => {
  
  const [showRegisterForm, setShowRegisterForm] = useState(false)
  
  return (
    <div className={styles.wrapper} >
      <LoginComponent 
        showRegisterForm={showRegisterForm} 
        setShowRegisterForm={setShowRegisterForm} 
      />
      <RegisterComponent 
        showRegisterForm={showRegisterForm} 
        setShowRegisterForm={setShowRegisterForm} 
      />
    </div>
  )
}

export default Login 
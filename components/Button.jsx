import styles from '../styles/Button.module.scss'
import Link from 'next/link'

const Button = (props) => {
  return (
     <Link href={props.url} className={styles.btn} style={{background: props.bgColor, color: props.textColor}} >
      {props.text} 
     </Link>
   )
}

export default Button 
import styles from '../styles/Comment.module.scss'
import Image from 'next/image'

const Comment = (props) => {
  return (
     <div className={styles.wrapper}>
       <div className={styles.profile_picture_wrapper}>
         {props.data.commenterPicture !== '' ? 
           <Image src={props.data.commenterPicture} height="50" width="50" alt={props.name} className={styles.profile_picture} /> : <p className={styles.initials}>{props.data.commenter.match(/[A-Z]/g).join('')} </p>} 
       </div>
       <div className={styles.details}>
         <div className={styles.profile_details}>
           <p className={styles.name}>{props.data.commenter}</p>
           <p className={styles.time}>{props.data.timeStamp}</p>
         </div>
         <p className={styles.comment}>{props.data.comment}</p>
       </div>
     </div>
  )
}

export default Comment 
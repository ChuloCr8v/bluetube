import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import {videoCard} from '../sampleData/SampleData'
import Card from '../components/Card'

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.video_wrapper}>
        {videoCard.map((data) => (
          <Card data={data} key={data.key} />
        ))} 
      </div>
    </div>
  )
}

export default Home 
import styles from '../styles/Video.module.scss'
import CircleIcon from '@mui/icons-material/Circle';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import ReplyIcon from '@mui/icons-material/Reply';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import Button from '../components/Button'
import Image from 'next/image'
import {SampleComments} from '../sampleData/SampleComments'
import {videoCard} from '../sampleData/SampleData'
import SuggestedVideo from '../components/SuggestedVideos'
import Comment from '../components/Comment'


const Video = (props) => {
  return(
    <div className={styles.wrapper}>
      <div className={styles.col}>
      <div className={styles.video_wrapper}>
        <iframe width="400" height="200" src="https://www.youtube.com/embed/UHo3M6b3k2o" title="YouTube video player" frameborder="0"  allowfullscreen className={styles.iframe}></iframe>
      </div>
      <div className={styles.details_wrapper}>
        <p className={styles.video_title}>{props.title}</p>
        <div className={styles.stats_wrapper}>
          <div className={styles.stat_wrapper}>
            <div className={styles.stat}>
               <p className={styles.stat_title}>{props.views.toLocaleString()} views</p>
            </div>
            <div className={styles.stat}>
               <CircleIcon className={styles.list_icon} />
               <p className={styles.stat_title}>{props.timeStamp}</p>
            </div>
          </div>
          <div className={styles.btns_wrapper}>
            <div className={styles.btn_wrapper}>
              <ThumbUpAltIcon className={styles.action_btn} />
              <p className={styles.btn_text}>
              {props.likes} 
              </p>
            </div>
            <div className={styles.btn_wrapper}>
              <ThumbUpAltIcon className={styles.action_btn} />
              <p className={styles.btn_text}> Dislike </p>
            </div>
            <div className={styles.btn_wrapper}>
              <ReplyIcon className={styles.action_btn} />
              <p className={styles.btn_text}> Share </p>
            </div>
            <div className={styles.btn_wrapper}>
              <LibraryAddIcon className={styles.action_btn} />
              <p className={styles.btn_text}> Save </p>
            </div>
          </div>
        </div>
        <div className={styles.channel_details_wrapper}>
            <Image src={props.channelPicture} height="50" width="50" alt={props.channelName} className={styles.channel_picture}/>
            <div className={styles.channel_detail}>
              <div className={styles.channel_name_wrapper}>
                <div>
                  <p className={styles.channel_name}>{props.channelName} </p>
                  <p className={styles.subscribers}>{props.followers} subscribers</p>
                </div>
                <Button text="Subscribe" bgColor= "red" textColor="white" />
              </div>
              <p className={styles.video_summary}>{props.videoSummary} </p>
           </div>
      </div>
      <div className={styles.add_a_comment}>
        <Image src={props.channelPicture} height="50" width="50" className={styles.channel_picture} alt={props.channelName} />
        <input type="text" placeholder="Add a comment" />
      </div>
      <div className={styles.comments}>
        {SampleComments.filter(data => data.postId == props.id).map(filteredComments => (
          <Comment data={filteredComments} key={filteredComments.commentId} />
        ))}  
      </div>
      </div>
    </div>
    <div className={styles.suggested_videos}>
      <p className={styles.title}>Watch More</p>
      <div className={styles.suggested_video}>
        {videoCard.map((data) => (
          <SuggestedVideo data={data} key={data.key} />
        ))} 
      </div>
    </div>
    </div>
   )
}

export default Video 

export const getServerSideProps= (context)=> {
  return {
      props: { 
         id: context.query.id, 
         channelName: context.query.channelName, 
         channelPicture: context.query.channelPicture, 
         followers: context.query.followers, 
         title: context.query.title, 
         views: context.query.views, 
         likes: context.query.likes, 
         timeStamp: context.query.timeStamp, 
         videoSummary: context.query.videoSummary, 
      }
  }
}
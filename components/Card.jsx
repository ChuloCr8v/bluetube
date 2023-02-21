import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";
import styles from "../styles/Card.module.scss";
import CircleIcon from "@mui/icons-material/Circle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "next/link";
import { format } from "timeago.js";
import { useState, useEffect } from "react";
import axios from "axios";

const Card = (props) => {
  const [channelDetails, setChannelDetails] = useState("");
  useEffect(() => {
    try {
      const getChannelDetails = async () => {
        const res = await axios.get(
          `http://localhost:8000/api/user/find/${props.data.userId}`
        );
        setChannelDetails(res.data);
      };
      getChannelDetails();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const likes = "I like you";
  return (
    <Link
      href={{
        pathname: "/[videos]",
        query: {
          videos: props.data._id,
          title: props.data.title,
          channelPicture: props.data.channelPicture,
          views: props.data.views,
          likes: likes,
          timeStamp: props.data.timeStamp,
          channelName: props.data.channelName,
          followers: props.data.followers,
          videoSummary: props.data.videoSummary,
        },
      }}
      className={styles.card}
    >
      <div className={styles.wrapper}>
        <div className={styles.thumbnail_wrapper}>
          <YouTubeIcon className={styles.icon} />
          <Image
            src={props.data.thumbnail}
            alt={props.data.title}
            height="202"
            width="400"
            className={styles.thumbnail}
          />
        </div>
        <div className={styles.details_wrapper}>
          <Image
            src={props.data.channelPicture}
            alt={channelDetails.username}
            className={styles.channel_picture}
            height="50"
            width="50"
          />
          <div className={styles.details}>
            <div className={styles.title_wrapper}>
              <p className={styles.video_title}>{props.data.title}</p>
              <MoreVertIcon className={styles.more_icon} />
            </div>
            <div className={styles.stats_wrapper}>
              <div className={styles.stat}>
                <p className={styles.channel_name}>{channelDetails.username}</p>
              </div>
              <div className={styles.stat}>
                <CircleIcon className={styles.list_icon} />
                <p>Views: {props.data.views.toLocaleString()}</p>
              </div>
              <div className={styles.stat}>
                <CircleIcon className={styles.list_icon} />
                <p>Uploaded: {format(props.data.createdAt)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;

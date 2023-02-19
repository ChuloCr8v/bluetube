import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { videoCard } from "../sampleData/SampleData";
import Card from "../components/Card";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideo = async () => {
      const res = await axios.get("http://localhost:8000/api/video/videos");
      console.log(res.data);
      setVideos(res.data);
    };
    getVideo();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.video_wrapper}>
          {videos.map((data) => (
            <Card data={data} key={data._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

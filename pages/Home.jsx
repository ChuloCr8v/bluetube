import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { videoCard } from "../sampleData/SampleData";
import Card from "../components/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVideoSuccess } from "./redux/videoSlice";

const Home = () => {
  const [allVideos, setAllVideos] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getVideo = async () => {
      const res = await axios.get("http://localhost:8000/api/video/videos");
      setAllVideos(res.data);
      dispatch(getVideoSuccess(res.data));
    };
    getVideo();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.video_wrapper}>
          {allVideos.map((data) => (
            <Card data={data} key={data._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

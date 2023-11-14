import { IonButton, IonContent, IonIcon, IonPage, IonText } from "@ionic/react";
import "./Tips-videos-details.css";
import {
  arrowBackOutline,
  checkmarkOutline,
  play,
  playSkipForward,
} from "ionicons/icons";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface PlantCareItem {
  id: number;
  care_plant_name: string;
  care_plant_video: string;
  care_plant_video_minutes: string;
  care_plant_desc: string;
  care_plant_content: string;
}
const TipsVideosDetails: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hidePlayBtn, setHidePlayBtn] = useState<boolean>(false);
  const [data, setData] = useState<PlantCareItem>();
  console.log(data);
  const { id } = useParams();

  const togglePlayPause = () => {
    const video = videoRef?.current;
    if (video?.paused || video?.ended) {
      video?.play();
      setHidePlayBtn(true);
    } else {
      video?.pause();
      setHidePlayBtn(false);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://prounity.uz/plants/api/app/plant-care/${id}/`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <IonPage className="tips-videos-detail">
      <IonContent fullscreen>
        <div className="video-box">
          <Link className="back-btn" to={"/tips-videos"}>
            <IonIcon icon={arrowBackOutline}></IonIcon>
          </Link>
          <video ref={videoRef} onClick={togglePlayPause} className="video">
            <source
              src={`https://prounity.uz/media/videos/videoplayback.mp4`}
              type="video/mp4"
            />
          </video>
          <div
            className="play-btn-box"
            style={{ display: `${hidePlayBtn ? "none" : "flex"}` }}
          >
            <IonButton
              fill="clear"
              className="play-btn"
              onClick={togglePlayPause}
            >
              <IonIcon icon={play}></IonIcon>
            </IonButton>
          </div>
        </div>
        <div className="content">
          <div className="video-text">
            <IonText className="video-title">
              <h2>Caring for Your Thirsty Plants</h2>
            </IonText>
            <IonText className="video-desc">
              This a comprehensive guidie to understtanding and amanging the
              qatering needs of your beloved palnts. This resourse provides
              essential iformation...<span>Read more</span>
            </IonText>
          </div>
          <div className="topics-video">
            <IonText className="sub-title">
              <h2>Topics</h2>
            </IonText>
            <div className="topics-video-box">
              <div className="topics-video-card">
                <IonButton className="status-btn" fill="clear">
                  <IonIcon icon={checkmarkOutline}></IonIcon>
                </IonButton>
                <IonText className="card-text">
                  Nourishing Nature, One Drop at a Time
                </IonText>
              </div>
              <div className="step-bar"></div>
              <div className="topics-video-card">
                <IonButton className="status-btn" fill="clear">
                  <IonIcon icon={checkmarkOutline}></IonIcon>
                </IonButton>
                <IonText className="card-text">
                  Quenching Thirts for Life and Growth
                </IonText>
              </div>
              <div className="step-bar"></div>
              <div className="topics-video-card">
                <IonButton className="status-btn" fill="clear">
                  <IonIcon size="small" icon={play}></IonIcon>
                </IonButton>
                <IonText className="card-text">
                  Review, Thrive , Water Wise
                </IonText>
              </div>
              <div className="step-bar disabled"></div>
              <div className="topics-video-card disabled">
                <IonButton className="status-btn" fill="clear">
                  <IonIcon size="small" icon={playSkipForward}></IonIcon>
                </IonButton>
                <IonText className="card-text">
                  Review, Thrive , Water Wise
                </IonText>
              </div>
            </div>
          </div>
          <div className="recently-uploadet">
            <IonText className="sub-title">
              <h2 style={{ marginTop: "30px" }}>Recenetly Uploaded</h2>
            </IonText>
            <div className="recently-uploadet-cards">
              <div className="card">
                <img
                  src="https://st.depositphotos.com/2632165/4026/i/450/depositphotos_40264933-stock-photo-young-plant.jpg"
                  alt="img"
                />
              </div>
              <div className="card">
                <img
                  src="https://st.depositphotos.com/2632165/4026/i/450/depositphotos_40264933-stock-photo-young-plant.jpg"
                  alt="img"
                />
              </div>
              <div className="card">
                <img
                  src="https://st.depositphotos.com/2632165/4026/i/450/depositphotos_40264933-stock-photo-young-plant.jpg"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TipsVideosDetails;

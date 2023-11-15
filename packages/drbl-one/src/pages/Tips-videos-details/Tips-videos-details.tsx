import { IonButton, IonContent, IonIcon, IonPage, IonText } from "@ionic/react";
import "./Tips-videos-details.css";
import {
  arrowBackOutline,
  checkmarkOutline,
  play,
  playSkipForward,
} from "ionicons/icons";
import { useEffect, useRef, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

interface PlantCareItem {
  id: number;
  care_plant_name: string;
  care_plant_video: null;
  care_plant_video_minutes: string;
  care_plant_desc: string;
  care_plant_content: string;
}
const TipsVideosDetails: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hidePlayBtn, setHidePlayBtn] = useState<boolean>(false);
  const [data, setData] = useState<PlantCareItem>();
  const [resentlyUploaded, setResentlyUploaded] = useState([]);
  const [showFullText, setShowFullText] = useState<boolean>(false);
  const { id } = useParams();

  const source = (
    <source
      src={`https://prounity.uz${data?.care_plant_video}`}
      type="video/mp4"
    />
  );
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://prounity.uz/plants/api/app/plant-care/${id}/`
      );
      const response2 = await fetch(
        `https://prounity.uz/plants/api/app/plant-recently-uploaded/`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const data2 = await response2.json();
      setData(data);
      setResentlyUploaded(data2);
      console.log(data2);

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

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

  return (
    <IonPage className="tips-videos-detail">
      <IonContent fullscreen>
        <div className="video-box">
          <Link className="back-btn" to={"/tips-videos"}>
            <IonIcon icon={arrowBackOutline}></IonIcon>
          </Link>

          <video
            autoCorrect=""
            ref={videoRef}
            onClick={togglePlayPause}
            className="video"
          >
            {data && source}
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
              <h2>{data?.care_plant_content}</h2>
            </IonText>
            <IonText className="video-desc">
              {showFullText
                ? data?.care_plant_desc
                : data?.care_plant_desc.slice(0, 150)}
              {data?.care_plant_desc?.length > 150 && !showFullText && (
                <>
                  ...{" "}
                  <span
                    className="read-more"
                    onClick={() => setShowFullText(true)}
                  >
                    Read more
                  </span>
                </>
              )}
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
                  Hydration for Happy Greenery
                </IonText>
              </div>
            </div>
          </div>
          <div className="recently-uploadet">
            <IonText className="sub-title">
              <h2 style={{ marginTop: "32px" }}>Recently Uploaded</h2>
            </IonText>
            <div className="recently-uploadet-cards">
              {resentlyUploaded.map((item) => (
                <div className="card">
                  {resentlyUploaded.length > 0 ? (
                    <video>
                      <source
                        src={`https://prounity.uz${item?.care_topic_video}`}
                      />
                    </video>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TipsVideosDetails;

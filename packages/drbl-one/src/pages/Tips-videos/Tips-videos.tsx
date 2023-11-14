import {
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonNavLink,
  IonPage,
  IonRow,
  IonSearchbar,
  IonText,
  IonToolbar,
} from "@ionic/react";
import { arrowBackOutline, play, playOutline } from "ionicons/icons";
import "./Tips-videos.css";
import { useEffect, useState } from "react";
import TipsVideosDetails from "../Tips-videos-details/Tips-videos-details";
import { Link } from "react-router-dom";

interface PlantCareItem {
  id: number;
  care_plant_name: string;
  care_plant_video: string;
  care_plant_video_minutes: string;
}
const TipsVideos: React.FC = () => {
  const [plantCareData, setPlantCareData] = useState<PlantCareItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://prounity.uz/plants/api/app/plant-care/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPlantCareData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const generateRandomColor = () => {
    const colors = ["#fff0e7", "#E7FFFB", "#FFEEF1"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <IonPage className="videos-list">
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar className="videos-tollbar">
            <IonIcon icon={arrowBackOutline}></IonIcon>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonSearchbar className="searchbar"></IonSearchbar>
          {plantCareData.map((item) => (
            <Link to={`/tips-videos/${item?.id}`}>
              <IonCard
                className="videos-card"
                style={{ background: generateRandomColor() }}
              >
                <IonRow>
                  <IonCol size="12">
                    <IonText className="card-title">
                      {item?.care_plant_name}
                    </IonText>
                  </IonCol>
                </IonRow>
                <IonRow className="card-content">
                  <IonCol size="auto">
                    <video className="card-image">
                      <source
                        src={`https://prounity.uz${item?.care_plant_video}`}
                        type="video/mp4"
                      />
                    </video>
                  </IonCol>
                  <IonCol>
                    <div className="card-text">
                      <IonText>
                        <h3>Nourishing Your...</h3>
                      </IonText>
                      <IonText>
                        <p>{item?.care_plant_video_minutes}</p>
                      </IonText>
                    </div>
                    <div className="play-btn-box">
                      <IonButton className="play-btn" fill="clear">
                        <IonIcon icon={play}></IonIcon>
                      </IonButton>
                    </div>
                  </IonCol>
                </IonRow>
              </IonCard>
            </Link>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default TipsVideos;

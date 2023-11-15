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
import {
  arrowBackOutline,
  micOutline,
  play,
  playOutline,
  search,
} from "ionicons/icons";
import "./Tips-videos.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface PlantCareItem {
  id: number;
  care_plant_name: string;
  care_plant_video: string;
  care_plant_video_minutes: string;
  care_plant_content: string;
}
const TipsVideos: React.FC = () => {
  const [plantCareData, setPlantCareData] = useState<PlantCareItem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

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
        console.log(data);
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
          <IonToolbar className="videos-tollbar ion-padding">
            <Link style={{ color: "#000", fontSize: "1.5rem" }} to={"/"}>
              <IonIcon icon={arrowBackOutline}></IonIcon>
            </Link>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <div style={{ marginBottom: "20px" }} className="searchbar ">
            <div className="body-searchbar">
              <IonIcon className="icon" icon={search}></IonIcon>
              <input placeholder="Search" type="text" />
              <IonIcon className="icon" icon={micOutline}></IonIcon>
            </div>
          </div>
          {plantCareData.map((item) => (
            <Link to={`/tips-videos/${item?.id}`} key={item?.id}>
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
                        <h3>{item?.care_plant_content.slice(0, 12)}...</h3>
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

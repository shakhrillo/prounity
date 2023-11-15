import {
  IonAccordion,
  IonAccordionGroup,
  IonAvatar,
  IonBadge,
  IonButton,
  IonButtons,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import "./location.css";
import {
  logoIonic,
  cartOutline,
  locationOutline,
  refreshOutline,
  calendarOutline,
  tvOutline,
  leafOutline,
  search,
  micOutline,
  close,
} from "ionicons/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface userData {
  username: string;
  first_name: string;
}
interface locationData {
  location_name: string;
  location_img: string;
}
const Care: React.FC = () => {
  const [location, setLocation] = useState<locationData[]>([]);
  const [user, setUser] = useState<userData | null>(null);

  const getLocation = async () => {
    try {
      const response = await fetch(
        "https://prounity.uz/plants/api/app/plant-location-market/"
      );
      const data = await response.json();
      setLocation(data);
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };

  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await fetch(
        "https://prounity.uz/edu-app/api/authen/api/user_profiles_views/",
        {
          headers: headers,
        }
      );
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };

  const [activeItem, setActiveItem] = useState<number | null>(null);
  const categories = [
    { icon: `${locationOutline}`, name: "Location", path: "/location" },
    { icon: `${refreshOutline}`, name: "History", path: "/history" },
    { icon: `${calendarOutline}`, name: "List of Plants", path: "/tab1" },
    { icon: `${tvOutline}`, name: "Tips & Videos", path: "/tips-videos" },
    { icon: `${leafOutline}`, name: "Care of planting trees", path: "/care" },
  ];

  const handleClick = (index: number) => {
    setActiveItem(index);
    localStorage.setItem("activeItem", index.toString());
  };

  useEffect(() => {
    const savedActiveItem = localStorage.getItem("activeItem");
    if (savedActiveItem) {
      setActiveItem(parseInt(savedActiveItem));
    }
    getLocation();
    getUser();
  }, []);

  return (
    <>
      <IonMenu style={{ padding: "20px" }} contentId="main-content">
        <div style={{ padding: 20, position: "relative" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              gap: "20px",
              alignItems: "center",
              marginBottom: 30,
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                border: "2px solid rgba(36,77,25)",
                padding: "5px",
              }}
            >
              <img
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <p style={{ margin: 0, fontWeight: "bold", fontSize: "18px" }}>
                {user?.username}
              </p>
              <p style={{ margin: 0, fontSize: "14px", color: "grey" }}>
                {user?.first_name}
              </p>
            </div>
            <IonMenuToggle>
              <IonIcon
                style={{
                  position: "absolute",
                  right: 20,
                  top: 20,
                  color: "rgba(36,77,25)",
                }}
                icon={close}
              ></IonIcon>
            </IonMenuToggle>
          </div>
          <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
            {categories.map((item, index) => (
              <Link to={item.path}>
                <IonMenuToggle>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "0 15px",
                      borderRadius: 10,
                      backgroundColor:
                        activeItem === index ? "rgba(36,77,25)" : "transparent",
                      color: activeItem === index ? "white" : "black",
                    }}
                    onClick={() => handleClick(index)}
                  >
                    <IonIcon
                      style={{
                        color:
                          activeItem === index ? "white" : "rgba(36,77,25)",
                        marginRight: 10,
                        fontSize: "26px",
                      }}
                      icon={`${item.icon}`}
                    ></IonIcon>
                    <p style={{ fontSize: "18px" }}>{item.name}</p>
                  </li>
                </IonMenuToggle>
              </Link>
            ))}
          </ul>
        </div>
      </IonMenu>
      <IonPage id="main-content">
        <IonContent color={"light"}>
          <IonToolbar style={{ padding: "30px 18px 0" }}>
            <div style={{ display: "flex", gap: 15 }}>
              <IonButtons slot="start">
                <IonMenuButton
                  color={"light"}
                  style={{
                    background: "black",
                    width: 50,
                    height: 50,
                    borderRadius: 8,
                  }}
                  autoHide={false}
                ></IonMenuButton>
              </IonButtons>
              <p>Location</p>
            </div>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon name={logoIonic}></IonIcon>
              </IonButton>
            </IonButtons>
            <IonButtons slot="end">
              <IonButton
                style={{
                  backgroundColor: "rgba(36,77,25)",
                  width: 50,
                  height: 50,
                  borderRadius: 8,
                }}
              >
                <IonIcon color="light" icon={cartOutline}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <div style={{ width: "100%", height: "100%", padding: "24px" }}>
            <div
              style={{ padding: "0", marginBottom: "20px" }}
              className="searchbar"
            >
              <div className="body-searchbar">
                <IonIcon className="icon" icon={search}></IonIcon>
                <input placeholder="Search" type="text" />
                <IonIcon className="icon" icon={micOutline}></IonIcon>
              </div>
            </div>
            <IonAccordionGroup expand="inset">
              {location.map((item) => (
                <IonAccordion>
                  <IonItem slot="header" color="light">
                    <IonAvatar style={{ marginRight: "20px" }}>
                      <img
                        alt="Silhouette of a person's head"
                        src={`https://prounity.uz${item.location_img}`}
                      />
                    </IonAvatar>
                    <IonLabel>{item.location_name}</IonLabel>
                  </IonItem>
                  <div
                    style={{ background: "rgba(36,77,25)" }}
                    className="ion-padding"
                    slot="content"
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12269.150719992858!2d64.44373424999999!3d39.755648900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1699947385822!5m2!1sen!2s"
                      width="100%"
                      height="200"
                      style={{ borderRadius: "20px", border: "none" }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </IonAccordion>
              ))}
            </IonAccordionGroup>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Care;

import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './CurrentPlant.css';
import { logoIonic, arrowBack, heart, addCircle } from 'ionicons/icons';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CurrentPlant: React.FC = () => {
  const { id } = useParams();
  const [currentPlant, setCurrentPlant] = useState([]);
  const BASE_URL = 'https://prounity.uz';

  useEffect(() => {
    getCurrentPlant();
  }, []);

  const getCurrentPlant = async () => {
    const response = await fetch(
      `${BASE_URL}/plants/api/app/plant-profile/${id}/`
    );
    const data = await response.json();
    setCurrentPlant(data);
    console.log(data);
  };

  return (
    <>
      <IonMenu contentId='main-content'>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Mia Mhheb</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className='ion-padding'>
          <IonList>
            <IonItem>
              <IonLabel>Location</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>History</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>List of plants</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Tips & Videos</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Care of planting trees</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonPage id='main-content'>
        <IonContent>
          <IonToolbar
            class='product-toolbar'
            style={{
              paddingLeft: 18,
              paddingRight: 18,
              paddingTop: 18,
            }}
          >
            <div style={{ display: 'flex', gap: 15, height: 60 }}>
              <IonButtons slot='start'>
                <IonButton color={'light'}>
                  <IonIcon color='dark' icon={arrowBack}></IonIcon>
                </IonButton>
              </IonButtons>
            </div>
            <IonButtons slot='end'>
              <IonButton>
                <IonIcon name='logo-ionic'></IonIcon>
              </IonButton>
            </IonButtons>
            <IonButtons slot='end'>
              <IonButton
                style={{
                  backgroundColor: 'rgba(36,77,25)',
                  width: 50,
                  height: 45,
                  borderRadius: 8,
                }}
              >
                <IonIcon color='light' icon={heart}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>

          {currentPlant && (
            <div
              style={{
                paddingTop: 0,
                paddingBottom: 10,
                background: 'rgba(255,240,224)',
              }}
              className='title'
            >
              <IonText style={{ fontSize: 35 }}>
                {/* <b>{currentPlant.plant_name}</b> */}
              </IonText>

              <div className='peace-container'>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                    paddingTop: 160,
                  }}
                >
                  <IonText color={'medium'} style={{ fontSize: 20 }}>
                    <span style={{ fontSize: 14 }}>Type</span>
                    <br />
                    <b style={{ color: 'rgba(36,77,25)' }}>
                      {currentPlant.plant_type}
                    </b>
                  </IonText>
                  <IonText color={'medium'} style={{ fontSize: 20 }}>
                    <span style={{ fontSize: 14 }}>Category</span>
                    <br />
                    <b style={{ color: 'rgba(36,77,25)' }}>
                      {/* {currentPlant.plant_categories.name} */}
                      Category name
                    </b>
                  </IonText>
                  <IonText color={'medium'} style={{ fontSize: 20 }}>
                    <span style={{ fontSize: 14 }}>Price</span>
                    <br />
                    <b style={{ color: 'rgba(36,77,25)' }}>
                      ${currentPlant.plant_price}
                    </b>
                  </IonText>
                </div>

                <img
                  src={`https://i.pinimg.com/originals/58/9d/4a/589d4a02eccbee79513e0d19d36d088c.png`}
                  alt=''
                />
              </div>
            </div>
          )}

          <div className='product-list all-price-list about-product-list'>
            <div className='product'>
              <IonRow>
                <IonCol size='12'>
                  <div
                    style={{
                      width: 100,
                      height: 100,
                      background: 'rgb(254,228,224)',
                      borderRadius: 12,
                      textAlign: 'center',
                      paddingTop: 10,
                    }}
                  >
                    <h6>Light</h6>
                    <b>{currentPlant.plant_light}%</b>
                  </div>
                </IonCol>
              </IonRow>
            </div>
            <div className='product'>
              <IonRow>
                <IonCol size='12'>
                  <div
                    style={{
                      width: 100,
                      height: 100,
                      background: 'rgb(224,245,254)',
                      borderRadius: 12,
                      textAlign: 'center',
                      paddingTop: 10,
                    }}
                  >
                    <h6>Water</h6>
                    <b>{currentPlant.plant_water}L</b>
                  </div>
                </IonCol>
              </IonRow>
            </div>
            <div className='product'>
              <IonRow>
                <IonCol size='12'>
                  <div
                    style={{
                      width: 100,
                      height: 100,
                      background: 'rgb(245,254,225)',
                      borderRadius: 12,
                      textAlign: 'center',
                      paddingTop: 10,
                    }}
                  >
                    <h6>Temp</h6>
                    <b>{currentPlant.plant_temperature}C</b>
                  </div>
                </IonCol>
              </IonRow>
            </div>
            <div className='product'>
              <IonRow>
                <IonCol size='12'>
                  <div
                    style={{
                      width: 100,
                      height: 100,
                      background: 'rgb(223,229,253)',
                      borderRadius: 12,
                      textAlign: 'center',
                      paddingTop: 10,
                    }}
                  >
                    <h6>Temp</h6>
                    <b>{currentPlant.plant_tall}sm</b>
                  </div>
                </IonCol>
              </IonRow>
            </div>
          </div>

          <div className='banner-container'>
            <div
              className='banner'
              style={{
                background: '#f2f2f2',
                border: 'none',
                height: 'auto',
                position: 'relative',
              }}
            >
              <div>
                <IonRow>
                  <IonCol>
                    <div style={{ display: 'flex', gap: 10 }}>
                      <IonText
                        style={{ fontSize: 21 }}
                        className='banner-title'
                      >
                        <b>About {currentPlant.plant_name}</b>
                      </IonText>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quae repudiandae dolorum sit sequi dicta cumque earum ea
                      architecto! Temporibus quibusdam laudantium blanditiis.
                      <b style={{ color: 'rgba(36,77,25)' }}>Read More</b>
                    </p>
                  </IonCol>
                </IonRow>
              </div>
              <IonButton
                size='small'
                fill='clear'
                style={{
                  position: 'absolute',
                  right: -15,
                  bottom: -15,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(36,77,25)',
                  color: 'white',
                  width: 43,
                  height: 40,
                  fontSize: 20,
                }}
              >
                +
              </IonButton>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default CurrentPlant;

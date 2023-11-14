import { IonButton, IonButtons, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import { logoIonic } from 'ionicons/icons';

const Tab1: React.FC = () => {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Mia Mhheb</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
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
      <IonPage id="main-content">
        <IonContent>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton autoHide={false}></IonMenuButton>
            </IonButtons>
            <IonTitle>
              Hello Mia
              <IonText>Take care of your plants!</IonText>
            </IonTitle>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon name={logoIonic}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <div className="searchbar">
            <IonSearchbar></IonSearchbar>
            <IonButton>
              <IonIcon icon={logoIonic}></IonIcon>
            </IonButton>
          </div>
          <div className="title">
            <IonText>Recently Viewed</IonText>
          </div>
          <div className="product-list product-list-horizontal">
            <div className="product">
              <IonRow>
                <IonCol>
                  <img src="https://via.placeholder.com/150" alt="product" />
                </IonCol>
                <IonCol>
                  <IonText className='product-title'>Product Name</IonText>
                  <IonText className='product-subtitle'>Product Description</IonText>
                </IonCol>
              </IonRow>
            </div>
          </div>
          <IonSegment value="popular">
            <IonSegmentButton value="popular">
              <IonLabel>Popular</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="outdoor">
              <IonLabel>Outdoor</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="indoor">
              <IonLabel>Indoor</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          <div className="product-list">
            <div className="product">
              <IonRow>
                <IonCol>
                  <img src="https://via.placeholder.com/150" alt="product" />
                </IonCol>
                <IonCol>
                  <IonText className='product-title'>Product Name</IonText>
                  <IonText className='product-subtitle'>Product Description</IonText>
                  <IonText className='product-price'>25$</IonText>
                </IonCol>
              </IonRow>
            </div>
          </div>
          <div className="banner">
            <img src="https://via.placeholder.com/150" alt="banner" />
            <IonText className="banner-title">
              Free
            </IonText>
            <IonText className="banner-subtitle">Shipping</IonText>
            <IonButton className='banner-action'>Above 50$</IonButton>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Tab1;

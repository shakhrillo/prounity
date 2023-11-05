import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';

import { PuIcon, PuToolbar } from 'react-library';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <PuToolbar>OK</PuToolbar>
        <PuIcon>icon</PuIcon>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

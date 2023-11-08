import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

import { PuAccordion, defineCustomElements } from 'react-library';

defineCustomElements();

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <PuAccordion>
          <div slot="header">First Accordion</div>
          <div slot="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum aspernatur porro alias, nam molestiae vel!</div>
        </PuAccordion>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

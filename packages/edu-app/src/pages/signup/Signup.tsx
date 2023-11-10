import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';


import { PuAccordion, PuButton, PuCard, PuInput, PuToolbar, defineCustomElements } from 'react-library';

defineCustomElements();

const Signup: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      <PuToolbar>
        <span slot="title">Toolbar</span>
      </PuToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div  style={{width:"100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center", padding:"20px"}}>
          <PuCard  style={{padding:"5px"}}>
            <div slot='body'>
              <PuInput style={{marginBottom:"10px"}} label='Phone'/>
              <PuInput style={{marginBottom:"10px"}} label='Firstname'/>
              <PuInput style={{marginBottom:"10px"}} label='Lastname'/>
              <PuInput style={{marginBottom:"10px"}} label='Email'/>
              <PuInput style={{marginBottom:"10px"}} label='Password'/>
              <PuInput style={{marginBottom:"10px"}} label='Repassword' />
              <PuButton size='sm'>sign-up</PuButton>
            </div>
          </PuCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Signup;

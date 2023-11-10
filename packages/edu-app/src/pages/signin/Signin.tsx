import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';


import { PuAccordion, PuButton, PuCard, PuInput, PuToolbar, defineCustomElements } from 'react-library';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

defineCustomElements();

const Signin: React.FC = () => {

    const userNameRef = useRef();
    const paswordRef = useRef();
  
    const handleLogin = () => {
      fetch(`http://192.168.1.185:8000/authen/api/user_sig_in_views/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userNameRef.current?.value,
          password: paswordRef.current?.value,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("HTTP xato, so'rov bajarilmadi");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Xato:", error);
        });
    };

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
              
            </div>
          </PuCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Signin;

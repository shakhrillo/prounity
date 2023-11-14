import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './signin.css'

const Signin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://prounity.uz/edu-app/api/authen/api/user_sig_in_views/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log('Sign-in successful');
      } else {
        console.error('Sign-in failed');
      }
    } catch (error) {
      console.error('Error occurred during sign-in:', error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign-in</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{ width: "100%", height: "100%" }}>
          <div style={{ height: "50%", width: "100%" }}>
            <img style={{ height: "100%", width: "100%" }} src="https://m.media-amazon.com/images/I/61ltyvzbZAL.jpg" alt="" />
          </div>
          <div style={{ width: "100%", height: "50%", background: "rgba(36,77,25)", borderTopLeftRadius: "50px", borderTopRightRadius: "50px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <form onSubmit={handleSignIn}>
              <IonInput style={{ borderBottom: "1px solid white", color: "white", marginBottom: "20px" }} label="Username" value={username} onIonChange={e => setUsername(e.detail.value!)}></IonInput>
              <IonInput style={{ borderBottom: "1px solid white", color: "white", marginBottom: "20px" }} label="Password" value={password} type="password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
              <IonButton shape='round' color='light' expand='full' size='default' type='submit'>Sign in</IonButton>
            </form>
            <div style={{ display: 'flex', alignItems:"center" }}>
              <p style={{ color: "grey" }}>New User?</p>
              <Link to='/sign-up'><IonButton style={{ color: "white" }} fill='clear'>Sign up</IonButton></Link>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Signin;
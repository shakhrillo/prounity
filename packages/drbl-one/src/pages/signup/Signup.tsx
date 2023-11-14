import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { log } from 'console';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup: React.FC = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [email, setEmail] = useState('');
  const [groups, setGroups] = useState('');

  const handleSignUp = () => {
    const userData = {
      first_name: firstname,
      last_name: lastname,
      username: username,
      password: password,
      password2: repassword,
      email: email,
      groups: [1],
    };
    console.log(firstname);
    

    fetch('https://prounity.uz/edu-app/api/authen/api/user_register_views/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Handle successful response
        console.log('Signup successful:', data);
      })
      .catch((error) => {
        // Handle error
        console.error('Error:', error);
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign-up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{ width: '100%', height: '100%' }}>
          <div style={{ height: '40%', width: '100%' }}>
            <img
              style={{ height: '100%', width: '100%' }}
              src="https://www.clearhalo.com/cdn/shop/products/367478_grande.jpg?v=1627643494"
              alt="plant"
            />
          </div>
          <div
            style={{
              width: '100%',
              height: '60%',
              background: 'rgba(36,77,25)',
              borderTopLeftRadius: '50px',
              borderTopRightRadius: '50px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding:"24px"
            }}
          >
            <IonInput
              onIonInput={(e) => setFirstname(e.target.value)}
              style={{ borderBottom: '1px solid white', color: 'white' }}
              label="Username"
            ></IonInput>
            <IonInput
              onIonInput={(e) => setLastname(e.target.value)}
              style={{ borderBottom: '1px solid white', color: 'white' }}
              label="Firstname"
            ></IonInput>
            <IonInput
              onIonInput={(e) => setUsername(e.target.value)}
              style={{ borderBottom: '1px solid white', color: 'white' }}
              label="Lastname"
            ></IonInput>
            <IonInput
              onIonInput={(e) => setEmail(e.target.value)}
              style={{ borderBottom: '1px solid white', color: 'white' }}
              label="Email"
            ></IonInput>
            <IonInput
              onIonInput={(e) => setPassword(e.target.value)}
              style={{ borderBottom: '1px solid white', color: 'white' }}
              label="Password"
            ></IonInput>
            <IonInput
              onIonInput={(e) => setRepassword(e.target.value)}
              style={{ borderBottom: '1px solid white', color: 'white' }}
              label="Repassword"
            ></IonInput>
            <IonButton shape='round' color='light' expand='full' size='default' type='submit' onClick={handleSignUp}>
              Sign up
            </IonButton>
            <div style={{ display: 'flex', alignItems:"center" }}>
              <p style={{ color: 'grey' }}>Have you been?</p>
              <Link to={'/sign-in'}>
                <IonButton style={{ color: 'white' }} fill="clear">
                  Sign in
                </IonButton>
              </Link>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
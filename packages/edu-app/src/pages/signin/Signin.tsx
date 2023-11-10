import React, { useRef } from 'react';
import {
  PuButton,
  PuCard,
  PuInput,
  PuToolbar,
  defineCustomElements,
} from 'react-library';
import { IonContent, IonHeader, IonPage } from '@ionic/react';
import { useHistory } from 'react-router-dom';

defineCustomElements();

const Signin = () => {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const handleLogin = () => {
    fetch(`http://192.168.1.185:8000/authen/api/user_sig_in_views/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // @ts-ignore
        username: userNameRef.current?.value,
        // @ts-ignore
        password: passwordRef.current?.value,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('HTTP error, status = ' + response.status);
        }
        return response.json();
      })
      .then((data) => {
        // Save the token in local storage
        localStorage.setItem('token', data.token.access);
      })
      .then(() => {
        window.location.href = '/courses';
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <PuToolbar>
          <span slot='title'>Sign-in</span>
        </PuToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <div style={{ padding: '5px' }}>
            <div slot='body'>
              <form
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                action=''
              >
                {/* @ts-ignore */}
                <PuInput label='username' ref={userNameRef} />
                <PuInput
                  label='password'
                  style={{ marginBottom: '10px' }}
                  // @ts-ignore
                  ref={passwordRef}
                />
                <PuButton onClick={handleLogin}>sign-in</PuButton>
              </form>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Signin;

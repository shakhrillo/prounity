import { IonContent, IonPage } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { PuAvatar, PuButton, PuCard, PuImg, PuToolbar } from 'react-library';
import { Link, useLocation } from 'react-router-dom';

interface User {
  username: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const Profile: React.FC = () => {
  const BASE_URL = 'http://192.168.1.185:8000';
  const [user, setUser] = useState<User | undefined>(undefined);
  const location = useLocation();

  useEffect(() => {
    getUser();
  }, [location]);

  const getUser = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(
      `${BASE_URL}/authen/api/user_profiles_views/`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    setUser(data);
    console.log(data);
  };
  return (
    <IonPage>
      <IonContent>
        <PuToolbar>
          <span slot='title'>Profile</span>
        </PuToolbar>

        <h1 style={{ textAlign: 'center' }}>My Profile</h1>

        {user ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 15,
              flexDirection: 'column',
              paddingTop: 10,
            }}
          >
            <PuCard style={{ paddingLeft: 10, cursor: 'pointer' }}>
              <PuAvatar
                shape='round-3'
                src={`${BASE_URL}${user.avatar}`}
              ></PuAvatar>
              <h3>Username: {user?.username}</h3>
              <p>First_name: {user?.first_name}</p>
              <p>Last_Name: {user?.last_name}</p>

              <Link style={{ textDecoration: 'none' }} to={'/edit-profile'}>
                <PuButton
                  color='warning'
                  style={{ marginTop: 15, marginBottom: 15 }}
                >
                  Edit Profile
                </PuButton>
              </Link>
            </PuCard>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Profile;

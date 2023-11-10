import { IonContent, IonPage } from '@ionic/react';
import { useState, useEffect } from 'react';
import { PuButton, PuAvatar, PuCard, PuToolbar, defineCustomElements } from 'react-library';
import { Link, useLocation } from 'react-router-dom';

defineCustomElements();

interface Pro {
  id: number;
  avatar: string;
  username: string;
  first_name: string;
  last_name: string;
}

const Profile: React.FC = () => {
  const BASE_URL = 'http://192.168.1.185:8000';
  const [user, setUser] = useState('');
  const location = useLocation();

  useEffect(() => {
    getUser();
  }, [location]);

  const getUser = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(
      `http://192.168.1.185:8000/authen/api/user_profiles_views/`,
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
    console.log(user);
  };

  return (
    <IonPage>
      <IonContent>
        <PuToolbar>
          <span slot='title'>Profile</span>
        </PuToolbar>

        <h1 style={{ textAlign: 'center' }}>My Profile</h1>

        {user ? (
          <div style={{padding:"10px"}}>
            <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 15,
              flexDirection: 'column',
              paddingTop: 10,
              boxShadow:"1px 1px 3px 3px rgb(220, 219, 219)",
              borderRadius:"4px"
            }}
          >
            <div style={{ paddingLeft: 10, cursor: 'pointer' }}>
              <PuAvatar
                shape='round-3'
                src={`http://192.168.1.185:8000/${user.avatar}`}
              ></PuAvatar>
              <h3>Username: {user.username}</h3>
              <p>First_name: {user?.first_name}</p>
              <p>Last_Name: {user?.last_name}</p>

              <Link style={{ textDecoration: 'none' }} to={'/profile-edit'}>
                <PuButton
                  color='warning'
                  style={{ marginTop: 15, marginBottom: 15 }}
                >
                  Edit Profile
                </PuButton>
              </Link>
            </div>
          </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Profile;
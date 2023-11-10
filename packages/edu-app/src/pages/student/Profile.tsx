import { IonContent, IonPage } from '@ionic/react';
import { useState, useEffect } from 'react';
import { PuButton, PuCard, PuToolbar, defineCustomElements } from 'react-library';
import { Link } from 'react-router-dom';

defineCustomElements();

interface Pro {
  id: number;
  avatar: string;
  username: string;
  first_name: string;
  last_name: string;
}

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<Pro | null>(null);

  useEffect(() => {
    const getProfile = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch(
        'http://192.168.1.185:8000/authen/api/user_profiles_views/',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setProfile(data);
    };

    getProfile();
  }, []);

  return (
    <IonPage>
      <PuToolbar>
        <span slot="title">Profile</span>
      </PuToolbar>
      <IonContent fullscreen>
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            padding: '20px',
          }}
        >
          {profile && (
            <PuCard style={{ width: '100%' }}>
              <img
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
                slot="img"
                src={`http://192.168.1.185:8000/${profile.avatar}`}
                alt=""
              />
              <div slot="body">
                <p>{profile.username}</p>
                <p>{profile.first_name}</p>
                <p>{profile.last_name}</p>
                <Link to={`profile-edit`}><PuButton size='sm'>edit</PuButton></Link>
              </div>
            </PuCard>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
import { IonContent, IonPage } from '@ionic/react';
import { log } from 'console';
import React, { useState, useEffect, ChangeEvent, useRef } from 'react';
import { PuButton, PuCard, PuInput, PuToolbar, defineCustomElements } from 'react-library';
import { Link, useParams } from 'react-router-dom';

defineCustomElements();

interface Profile {
  id: number;
  avatar: File | null;
  username: string;
  first_name: string;
  last_name: string;
}

const EditProfile: React.FC = () => {
  const [profile, setProfile] = useState<Profile>({
    id: 0,
    avatar: null,
    username: '',
    first_name: '',
    last_name: ''
  });
  console.log(profile);
  

  useEffect(() => {
    const getProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://192.168.1.185:8000/authen/api/user_profiles_views/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    getProfile();
  }, []);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setProfile((prevProfile) => ({
        ...prevProfile,
        avatar: event?.target?.files[0],
      }));
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const saveProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      if (profile?.avatar) {
        formData.append('avatar', profile.avatar);
      }
      formData.append('username', profile?.username || '');
      formData.append('first_name', profile?.first_name || '');
      formData.append('last_name', profile?.last_name || '');

      const response = await fetch(`http://192.168.1.185:8000/authen/api/user_update_view/`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        console.log('Profile updated successfully');
      } else {
        const errorResponse = await response.json();
        console.error('Failed to update profile:', errorResponse);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <IonPage>
      <PuToolbar>
        <span slot="title">Edit-Profile</span>
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
              <div slot="body">
                <input
                  type="file"
                  name="avatar"
                  onChange={handleFileChange}
                />
                <PuInput
                  label="Username"
                  name="username"
                  value={profile.username}
                  onChange={handleInputChange}
                />
                <PuInput
                  label="First Name"
                  name="first_name"
                  value={profile.first_name}
                  onChange={handleInputChange}
                />
                <PuInput
                  label="Last Name"
                  name="last_name"
                  value={profile.last_name}
                  onChange={handleInputChange}
                />
                <Link to="/profile">
                  <PuButton size="sm" onClick={saveProfile}>
                    Save
                  </PuButton>
                </Link>
              </div>
            </PuCard>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EditProfile;
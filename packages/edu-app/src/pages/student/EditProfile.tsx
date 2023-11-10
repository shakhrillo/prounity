import { IonContent, IonPage } from '@ionic/react';
import React, { useEffect, useState, useRef } from 'react';
import { PuButton, PuCard, PuInput, PuToolbar } from 'react-library';
import { useHistory } from 'react-router';

const EditProfile: React.FC = () => {
  const BASE_URL = 'http://192.168.1.185:8000';
  const [user, setUser] = useState<any>();
  const usernameRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const [avatar, setAvatar] = useState<File | null>(null);
  const history = useHistory();

  useEffect(() => {
    getUser();
  }, []);

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
  };
  const handleEdit = async () => {
    const token = localStorage.getItem('token');

    const formData = new FormData();
    formData.append('username', usernameRef.current?.value || '');
    formData.append('first_name', firstNameRef.current?.value || '');
    formData.append('last_name', lastNameRef.current?.value || '');
    if (avatar) {
      formData.append('avatar', avatar);
    }

    const response = await fetch(`${BASE_URL}/authen/api/user_update_view/`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();
    setUser(null);
    if (usernameRef.current) usernameRef.current.value = '';
    if (firstNameRef.current) firstNameRef.current.value = '';
    if (lastNameRef.current) lastNameRef.current.value = '';
    setAvatar(null);
    if (avatarInputRef.current) avatarInputRef.current.value = '';
    history.push('/profile');
  };

  return (
    <IonPage>
      <IonContent>
        <PuToolbar>
          <span slot='title'>Edit Profile</span>
        </PuToolbar>

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
            <PuInput label='username' ref={usernameRef}></PuInput>
            <PuInput label='first_name' ref={firstNameRef}></PuInput>
            <PuInput label='last_name' ref={lastNameRef}></PuInput>
            <input
              placeholder='avatar'
              type='file'
              onChange={(e) => setAvatar(e.target.files?.[0] || null)}
              ref={avatarInputRef}
            />
            <PuButton onClick={handleEdit} style={{ marginTop: 15 }}>
              Edit
            </PuButton>
          </div>
        </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EditProfile;
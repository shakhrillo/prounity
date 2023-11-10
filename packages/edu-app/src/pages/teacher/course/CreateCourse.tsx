import { IonContent, IonPage } from '@ionic/react';
import React, { useState, useEffect, useRef } from 'react';
import { PuCard, PuToolbar, PuInput, PuButton } from 'react-library';

const CreateCourse: React.FC = () => {
  const BASE_URL = 'http://192.168.1.185:8000';

  const nameRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);
  const courseLogoRef = useRef<HTMLInputElement>(null);
  const summ_courseRef = useRef<HTMLInputElement>(null);
  const [userId, setUserId] = useState<number>(0);

  const getUserIdFromToken = (token: string) => {
    const tokenParts = token.split('.');
    const payload = JSON.parse(atob(tokenParts[1]));
    setUserId(payload.user_id);
    return payload.user_id;
  };

  const handleAddCourse = () => {
    const token = localStorage.getItem('token');
    const name = nameRef.current?.value;
    const content = contentRef.current?.value;
    const course_logo = courseLogoRef.current?.files?.[0];
    const summ_course = summ_courseRef.current?.value;

    if (token) {
      const userIdFromToken = getUserIdFromToken(token);
      const formData = new FormData();
      formData.append('name', name || '');
      formData.append('content', content || '');
      formData.append('course_logo', course_logo || '');
      formData.append('summ_course', summ_course || '');
      formData.append('category_id', String(1 || ''));
      formData.append('author_id', String(userIdFromToken || ''));

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      fetch(`${BASE_URL}/course/api/course_views/`, {
        method: 'POST',
        body: formData,
        headers: headers,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Course created:', data);
        })
        .catch((error) => {
          console.error('Error creating course:', error);
        });
    } else {
      console.error('Token not found in localStorage');
    }
  };

  return (
    <IonPage>
      <IonContent>
        <PuToolbar>
          <span slot='title'>Create Course</span>
        </PuToolbar>

        <h1 style={{ textAlign: 'center' }}>Create Your Course</h1>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 10,
          }}
        >
          <PuCard style={{ padding: 5 }}>
            {/*@ts-ignore */}
            <PuInput label='Title' ref={nameRef}></PuInput>
            {/*@ts-ignore */}
            <PuInput label='Content' ref={contentRef}></PuInput>
            <input
              style={{ marginTop: 10 }}
              placeholder='Course Logo'
              ref={courseLogoRef}
              type='file'
            />
            {/*@ts-ignore */}
            <PuInput label='Price' type='number' ref={summ_courseRef}></PuInput>
            <div style={{ display: 'flex', justifyContent: 'end' }}>
              <PuButton onClick={handleAddCourse} style={{ marginTop: 15 }}>
                Add
              </PuButton>
            </div>
          </PuCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CreateCourse;

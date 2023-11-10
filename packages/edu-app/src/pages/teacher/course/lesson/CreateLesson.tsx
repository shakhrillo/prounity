import { IonContent, IonPage } from '@ionic/react';
import React, { useEffect, useRef } from 'react';
import { PuButton, PuCard, PuImg, PuInput, PuToolbar } from 'react-library';
import { Link, useParams, useHistory } from 'react-router-dom';

const CreateLesson: React.FC = () => {
  const BASE_URL = 'http://192.168.1.185:8000';
  const [blogs, setBlogs] = React.useState([]);
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const nameRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleAddCourse = () => {
    const token = localStorage.getItem('token');
    const name = nameRef.current?.value;
    const content = contentRef.current?.value;
    const video = videoRef.current?.files?.[0];
    const file = fileRef.current?.files?.[0];

    if (token) {
      const formData = new FormData();
      formData.append('name', name || '');
      formData.append('content', content || '');
      if (video) {
        formData.append('video', video);
      }
      if (file) {
        formData.append('files', file);
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      fetch(`${BASE_URL}/course/api/course_lesson_views/${id}/`, {
        method: 'POST',
        body: formData,
        headers: headers,
      })
        .then((response) => response.json())
        .then((data) => {
          if (nameRef.current) {
            nameRef.current.value = '';
          }
          if (contentRef.current) {
            contentRef.current.value = '';
          }
          if (videoRef.current) {
            videoRef.current.value = '';
          }
          if (fileRef.current) {
            fileRef.current.value = '';
          }

          history.push(`/current-course/${id}`);
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
          <span slot='title'>Create Lesson</span>
        </PuToolbar>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 10,
          }}
        >
          <PuCard>
            <PuInput label='Name' ref={nameRef}></PuInput>
            <PuInput label='Content' ref={contentRef}></PuInput>
            <input placeholder='Video' ref={videoRef} type='file' />
            <input placeholder='File' ref={fileRef} type='file' />

            <PuButton onClick={handleAddCourse} style={{ marginTop: 15 }}>
              Add
            </PuButton>
          </PuCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CreateLesson;

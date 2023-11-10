import { IonContent, IonPage } from '@ionic/react';
import React, { useEffect, useRef } from 'react';
import { PuButton, PuCard, PuImg, PuInput, PuToolbar } from 'react-library';
import { Link, useParams, useHistory } from 'react-router-dom';

const EditCourse: React.FC = () => {
  const BASE_URL = 'http://192.168.1.185:8000';
  const [blogs, setBlogs] = React.useState([]);
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const nameRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);
  const summ_courseRef = useRef<HTMLInputElement>(null);
  const course_logoRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchCourseData();
  }, []);

  const fetchCourseData = () => {
    fetch(`${BASE_URL}/course/api/course_crud_views/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        if (nameRef.current) {
          nameRef.current.value = data.name;
        }
        if (contentRef.current) {
          contentRef.current.value = data.content;
        }
        if (summ_courseRef.current) {
          summ_courseRef.current.value = data.summ_course;
        }
      })
      .catch((error) => {
        console.error('Error fetching blog data:', error);
      });
  };

  const handleEditCourse = () => {
    const token = localStorage.getItem('token');
    const name = nameRef.current?.value;
    const content = contentRef.current?.value;
    const summ_course = summ_courseRef.current?.value;
    const course_logo = course_logoRef.current?.files?.[0];

    if (token) {
      const formData = new FormData();
      formData.append('name', name || '');
      formData.append('content', content || '');
      formData.append('summ_course', summ_course || '');
      if (course_logo) {
        formData.append('course_logo', course_logo);
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      fetch(`${BASE_URL}/course/api/course_crud_views/${id}/`, {
        method: 'PUT',
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
          if (summ_courseRef.current) {
            summ_courseRef.current.value = '';
          }
          if (course_logoRef.current) {
            course_logoRef.current.value = '';
          }

          history.push('/course');
          console.log('Course edited:', data);
        })
        .catch((error) => {
          console.error('Error editing course:', error);
        });
    } else {
      console.error('Token not found in localStorage');
    }
  };

  return (
    <IonPage>
      <IonContent>
        <PuToolbar>
          <span slot='title'>Edit Course</span>
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
            <PuInput label='Price' ref={summ_courseRef}></PuInput>
            <input placeholder='Course_logo' ref={course_logoRef} type='file' />

            <PuButton onClick={handleEditCourse} style={{ marginTop: 15 }}>
              Edit
            </PuButton>
          </PuCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EditCourse;

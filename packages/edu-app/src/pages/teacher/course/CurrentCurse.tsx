import { IonContent, IonPage } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import {
  PuCard,
  PuImg,
  PuToolbar,
  PuList,
  PuAccordion,
  PuButton,
} from 'react-library';
import { Link, useParams } from 'react-router-dom';

const CurrentCurse: React.FC = () => {
  const [currentCourse, setCurrentCourse] = useState([]);
  const { id }: { id: any } = useParams();
  const BASE_URL = 'http://192.168.1.185:8000';

  useEffect(() => {
    getCurrentCourse();
  }, []);

  const getCurrentCourse = async () => {
    const response = await fetch(
      `${BASE_URL}/course/api/course_crud_views/${id}/`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setCurrentCourse(data);
  };

  return (
    <IonPage>
      <IonContent>
        <PuToolbar>
          <span slot='title'>Course</span>
        </PuToolbar>

        <h1 style={{ textAlign: 'center' }}>Current Courses</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'end',
            paddingRight: 50,
          }}
        >
          <Link to={`/create-lesson/${id}/`}>
            <PuButton>Add</PuButton>
          </Link>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 10,
          }}
        >
          {currentCourse.map((course) => (
            <PuCard
              key={course.id}
              style={{ paddingLeft: 10, paddingRight: 10, cursor: 'pointer' }}
            >
              <PuImg
                src={`${BASE_URL}${course.course_logo}`}
                alt='error'
              ></PuImg>
              <h3>{course.name}</h3>
              <p>{course.content}</p>
              <div>
                <h1>Lessonss</h1>
                {course.course.map((lesson) => (
                  <div key={lesson.id}>
                    <PuList>
                      <PuAccordion>
                        <span slot='header'>{lesson.name}</span>
                        <span slot='content'>{lesson.content}</span>
                        <video
                          style={{ width: '100%', marginTop: 15 }}
                          slot='content'
                          src={`${BASE_URL}${lesson.video}`}
                        ></video>
                      </PuAccordion>
                    </PuList>
                  </div>
                ))}
              </div>
              <p style={{ color: 'red' }}>{course.summ_course}$</p>
            </PuCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CurrentCurse;

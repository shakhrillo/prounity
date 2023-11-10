import { IonContent, IonPage } from '@ionic/react';
import React, { useEffect } from 'react';
import { PuToolbar, PuCard, PuImg, PuButton, PuModal } from 'react-library';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Course = () => {
  const BASE_URL = 'http://192.168.1.185:8000';
  const [courses, setCourses] = React.useState([]);
  const location = useLocation();

  useEffect(() => {
    getCourses();
  }, [location]);

  const getCourses = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(
      `${BASE_URL}/course/api/author_course_views/`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    setCourses(data);
    console.log(data);
  };

  const currentCourse = () => {
    console.log('hello course');
  };

  const deleteCourse = async (id) => {
    const token = localStorage.getItem('token');
    const response = await fetch(
      `${BASE_URL}/course/api/course_crud_views/${id}/`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    getCourses();
  };

  return (
    <IonPage>
      <IonContent>
        <PuToolbar>
          <span slot='title'>Courses</span>
        </PuToolbar>
        <h1 style={{ textAlign: 'center' }}>My Courses</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'end',
            paddingTop: 10,
            paddingRight: 50,
          }}
        >
          <PuButton color='primary'>
            <Link
              style={{ textDecoration: 'none', color: 'white' }}
              to={'/create-course'}
            >
              {' '}
              Add Course
            </Link>
          </PuButton>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 10,
            flexDirection: 'column',
            alignItems: 'center',
            gap: 15,
          }}
        >
          {courses.map((course) => (
            <div>
              <PuCard
                onClick={currentCourse}
                style={{
                  paddingLeft: 10,
                  paddingBottom: 5,
                  cursor: 'pointer',
                }}
              >
                <Link
                  to={`/current-course/${course.id}/`}
                  style={{ textDecoration: 'none' }}
                >
                  <div>
                    <h3>{course.name}</h3>
                    <PuImg
                      src={`${BASE_URL}${course.course_logo}`}
                      alt='error'
                    ></PuImg>
                  </div>
                </Link>

                <div style={{ display: 'flex', gap: 5 }}>
                  <PuButton
                    onClick={() => deleteCourse(course.id)}
                    color='danger'
                  >
                    Delete
                  </PuButton>
                  <Link
                    style={{ textDecoration: 'none' }}
                    to={`/edit-course/${course.id}/`}
                  >
                    <PuButton color='warning'>Edit Course</PuButton>
                  </Link>
                </div>
              </PuCard>
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Course;

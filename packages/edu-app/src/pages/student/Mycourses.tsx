import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { log } from 'console';
import React, { useState, useEffect } from 'react';
import { PuBadge, PuButton, PuCard, PuCheckbox, PuInput, PuToggle, PuToolbar, defineCustomElements } from 'react-library';
import { Link } from 'react-router-dom';

defineCustomElements();

interface Course {
  id: number;
  content: string;
  name: string;
  course_logo: string;
}

const Mycourses: React.FC = () => {
  const [course, setCourse] = useState<Course[]>([]);

  const getCourses = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://192.168.1.185:8000/course/api/user_course_views/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setCourse(data);
      console.log(data);
      
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <IonPage>
      <PuToolbar>
        <span slot="title">My Courses</span>
      </PuToolbar>
      <IonContent fullscreen>
        <div style={{ width: '100%', minHeight: '80%', display: 'flex', flexDirection:"column",  justifyContent: 'start', alignItems: 'start', padding: '20px' }}>
          <div style={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center", paddingBottom:"10px"}}>
            <Link to={'/courses'}><PuButton color='success' size='sm'>All Courses</PuButton></Link>
            <div style={{display:"flex", gap:"5px"}}>
            <PuButton color='primary' size='sm'>My Courses</PuButton>
            <Link to={'/categories'}><PuButton color='success' size='sm'>All Categories</PuButton></Link>
            </div>
          </div>
          {course.map((item) => (
            <div key={item.id} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', marginBottom: '20px' }}>
              <PuCard title={item.course_id.content} subtitle={item.course_id.name} content={item.course_id.summ_course + "$"} style={{ padding: '5px', width: '100%' }}>
                <img style={{ width: '100%', height: '300px', objectFit: 'cover' }} slot="img" src={`http://192.168.1.185:8000/${item.course_id.course_logo}`} alt="salom" />
              </PuCard>
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Mycourses;
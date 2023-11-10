import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { PuAccordion, PuBadge, PuButton, PuCard, PuCheckbox, PuImg, PuList, PuInput, PuToggle, PuToolbar, defineCustomElements } from 'react-library';
import { useParams } from 'react-router';

defineCustomElements();

interface Course {
  id: number;
  content: string;
  name: string;
  course_logo: string;
}

const Categorydetail: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const {id} = useParams()


  const getCourses = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://192.168.1.185:8000/course/api/categories_in_course_views/${id}/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setCourses(data.data);
      console.log(data.data);
    
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  useEffect(() => {
    getCourses()
  }, []);


  return (
    <IonPage>
      <PuToolbar>
        <span slot="title">Category-detail</span>
      </PuToolbar>
      <IonContent >
      <div
          style={{
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            paddingTop: 10,
            padding:20
          }}>
            {courses.map(item=>
                <PuCard title={item.name} key={item.id} style={{marginBottom:"10px"}}>
                    <img slot='img' src={`http://192.168.1.185:8000/${item.img}`} alt="" />
                </PuCard>    
            )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Categorydetail;
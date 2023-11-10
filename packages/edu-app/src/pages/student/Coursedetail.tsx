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

const Coursedetail: React.FC = () => {
  const [course, setCourse] = useState<Course[]>([]);
  const {id} = useParams()


  const getCourses = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://192.168.1.185:8000/course/api/course_crud_views/${id}/`, {
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
    getCourses()
  }, []);


  return (
    <IonPage>
      <PuToolbar>
        <span slot="title">Course-detail</span>
      </PuToolbar>
      <IonContent >
      <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 10,
            padding:20
          }}
        >
          {course.map((item) => (
            <div
              key={item.id}
              style={{ width:"100%", padding: 10, cursor: 'pointer', boxShadow:"1px 1px 3px 3px rgb(220, 219, 219)", borderRadius:"4px" }}
            >
              <PuImg
                src={`http://192.168.1.185:8000${item.course_logo}`}
                alt='error'
              ></PuImg>
              <h3>{item.name}</h3>
              <p>{item.content}</p>
              <p>Author : {item?.author_id?.first_name}  {item?.author_id?.last_name}</p>
              <p>Price : {item?.summ_course}</p>
              <div>
              </div>
              <PuButton size='sm'>buy</PuButton>
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Coursedetail;
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
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

const Courses: React.FC = () => {
  const [course, setCourse] = useState<Course[]>([]);
  const [favorites, setFavorites] = useState<Course[]>([]);

  const getCourses = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://192.168.1.185:8000/course/api/course_views/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setCourse(data.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const toggleFavorite = (item: Course) => {
    if (favorites.includes(item)) {
      const updatedFavorites = favorites.filter((favorite) => favorite !== item);
      setFavorites(updatedFavorites);
    } else {
      const updatedFavorites = [...favorites, item];
      setFavorites(updatedFavorites);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  useEffect(() => {
    const favoritesData = localStorage.getItem('favorites');
    if (favoritesData) {
      setFavorites(JSON.parse(favoritesData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <IonPage>
      <PuToolbar>
        <span slot="title">Courses</span>
      </PuToolbar>
      <IonContent fullscreen>
        <div style={{ width: '100%', minHeight: '80%', display: 'flex', flexDirection:"column",  justifyContent: 'start', alignItems: 'start', padding: '20px' }}>
          <div style={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center", paddingBottom:"10px"}}>
            <Link to={'/courses'}><PuButton color='primary' size='sm'>All Courses</PuButton></Link>
            <div style={{display:"flex", gap:"5px"}}>
            <Link to={'/my-courses'}><PuButton color='success' size='sm'>My Courses</PuButton></Link>
            <Link to={'/categories'}><PuButton color='success' size='sm'>All Categories</PuButton></Link>
            </div>
          </div>
          {course.map((item) => (
            <div key={item.id} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', marginBottom: '20px' }}>
              <PuCard title={item.content} subtitle={item.name} style={{ padding: '5px', width: '100%' }}>
                <img style={{ width: '100%', objectFit: 'cover' }} slot="img" src={`http://192.168.1.185:8000/${item.course_logo}`} alt="" />
                <div slot="body">
                  <PuBadge
                    shape="round-3"
                    size="small"
                    onClick={() => toggleFavorite(item)}
                    color={favorites.includes(item) ? 'primary' : 'secondary'}
                  ></PuBadge>
                  <Link to={`/course-detail/${item.id}`}><PuButton>show</PuButton></Link>
                </div>
              </PuCard>
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Courses;
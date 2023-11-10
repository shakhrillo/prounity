import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { PuBadge, PuButton, PuCard, PuCheckbox, PuInput, PuList, PuToggle, PuToolbar, defineCustomElements } from 'react-library';
import { Link } from 'react-router-dom';

defineCustomElements();

interface Course {
  id: number;
  content: string;
  name: string;
  course_logo: string;
}

const Category: React.FC = () => {
  const [category, setCategory] = useState<Course[]>([]);

  const getCategories = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://192.168.1.185:8000/course/api/categories_course_views/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setCategory(data.data);
      console.log(data);
      
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };



  useEffect(() => {
    getCategories();
  }, []);

  return (
    <IonPage>
      <PuToolbar>
        <span slot="title">Categories</span>
      </PuToolbar>
      <IonContent fullscreen>
        <div style={{ width: '100%', minHeight: '80%', display: 'flex', flexDirection:"column",  justifyContent: 'start', alignItems: 'start', padding: '20px' }}>
          <div style={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center", paddingBottom:"10px"}}>
          <Link to={'/courses'}><PuButton color='success' size='sm'>All Categories</PuButton></Link>
            <div style={{display:"flex", gap:"5px"}}>
            <Link to={'/my-courses'}><PuButton color='success' size='sm'>My Courses</PuButton></Link>
            <PuButton color='primary' size='sm'>All Categories</PuButton>
            </div>
          </div>
          {category.map(item=>
            <PuList key={item.id} style={{padding:"5px", display:"flex", alignItems:"center", gap:"10px", justifyContent:"space-between"}} lines='full'>
                <div style={{padding:"5px", display:"flex", alignItems:"center", gap:"10px"}}>
                    <img style={{width:30, height:"30px", objectFit:"cover"}} src={`http://192.168.1.185:8000/${item.img}`} alt="" />
                    <p>{item.name}</p>
                </div>
                <Link to={`category-detail/${item.id}`}><PuButton size='sm'>posts</PuButton></Link>
            </PuList>    
            )}

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Category;
import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import {
  PuButton,
  PuCard,
  PuInput,
  PuToolbar,
  defineCustomElements,
} from 'react-library';
import { Link } from 'react-router-dom';

defineCustomElements();

interface Blog {
  id: number;
  title: string;
  content: string;
  author_id: {
    first_name: string;
    last_name: string;
  };
  img: string;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const getBlogs = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(
      'http://192.168.1.185:8000/others_blogs/api/blog_list_views/',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    setBlogs(data.data);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <IonPage className=''>
      <PuToolbar>
        <span slot='title'>Blogs</span>
      </PuToolbar>
      <IonContent fullscreen>
        <div style={{ width: '100%', minHeight: '100%', padding: '20px' }}>
          {blogs.map((item) => (
            <div
              key={item.id}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'start',
                marginBottom: '20px',
              }}
            >
              <div
                title={item.title}
                subtitle={item.content}
                content={`${item.author_id.first_name} ${item.author_id.last_name}`}
                style={{ padding: '5px', width: '100%' }}
              >
                <img
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                  slot='img'
                  src={`http://192.168.1.185:8000/${item.img}`}
                  alt=''
                />
                <div slot='body'>
                  <Link to={`/blog-detail/${item.id}`}>
                    <PuButton size='sm'>Show</PuButton>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Blogs;

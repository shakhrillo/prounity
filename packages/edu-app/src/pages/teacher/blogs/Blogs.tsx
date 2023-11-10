import { IonContent, IonPage } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { PuButton, PuCard, PuImg, PuToolbar } from 'react-library';
import { Link, useParams, useLocation } from 'react-router-dom';

interface Blog {
  id: number;
  title: string;
  content: string;
  img: string;
}

const CreateCourse: React.FC = () => {
  const BASE_URL = 'http://192.168.1.185:8000';
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const location = useLocation();

  useEffect(() => {
    getCourses();
  }, [location]);

  const deleteBlog = async (id: number) => {
    const token = localStorage.getItem('token');
    const response = await fetch(
      `${BASE_URL}/others_blogs/api/blog_list_crud_views/${id}/`,
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

  const getCourses = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(
      `${BASE_URL}/others_blogs/api/my_blog_list_views/`,
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
    console.log(data);
  };

  return (
    <IonPage>
      <IonContent>
        <PuToolbar>
          <span slot='title'>Blogs</span>
        </PuToolbar>
        <h1 style={{ textAlign: 'center' }}>My Blogs</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'end',
            paddingRight: 50,
            paddingTop: 10,
          }}
        >
          <PuButton color='primary'>
            <Link
              style={{ textDecoration: 'none', color: 'white' }}
              to={'/create-blog'}
            >
              {' '}
              Add Blog
            </Link>
          </PuButton>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 15,
            flexDirection: 'column',
            paddingTop: 10,
          }}
        >
          {blogs.map((blog, index) => (
            <PuCard key={index} style={{ paddingLeft: 10, cursor: 'pointer' }}>
              <PuImg
                style={{ paddingRight: 10 }}
                src={`${BASE_URL}${blog.img}`}
                alt='error'
              ></PuImg>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              <div style={{ display: 'flex', gap: 5 }}>
                <PuButton
                  onClick={() => deleteBlog(blog.id)}
                  // @ts-ignore
                  color='danger'
                  style={{ marginTop: 15, marginBottom: 15 }}
                >
                  Delete
                </PuButton>

                <PuButton
                  color='warning'
                  style={{ marginTop: 15, marginBottom: 15 }}
                >
                  <Link
                    style={{ textDecoration: 'none', color: 'white' }}
                    to={`/edit-blog/${blog.id}/`}
                  >
                    Edit
                  </Link>
                </PuButton>
              </div>
            </PuCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CreateCourse;

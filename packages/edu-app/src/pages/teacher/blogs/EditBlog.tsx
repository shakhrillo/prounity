import { IonContent, IonPage } from '@ionic/react';
import React, { useEffect, useRef } from 'react';
import { PuButton, PuCard, PuImg, PuInput, PuToolbar } from 'react-library';
import { Link, useParams, useHistory } from 'react-router-dom';

const EditBlog: React.FC = () => {
  const BASE_URL = 'http://192.168.1.185:8000';
  const [blogs, setBlogs] = React.useState([]);
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);
  const blogImgRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchBlogData();
  }, []);

  const fetchBlogData = () => {
    fetch(`${BASE_URL}/others_blogs/api/blog_list_crud_views/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        if (titleRef.current) {
          titleRef.current.value = data.title;
        }
        if (contentRef.current) {
          contentRef.current.value = data.content;
        }
      })
      .catch((error) => {
        console.error('Error fetching blog data:', error);
      });
  };

  const handleEditBlog = () => {
    const token = localStorage.getItem('token');
    const title = titleRef.current?.value;
    const content = contentRef.current?.value;
    const blog_img = blogImgRef.current?.files?.[0];

    if (token) {
      const formData = new FormData();
      formData.append('title', title || '');
      formData.append('content', content || '');
      if (blog_img) {
        formData.append('img', blog_img);
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      fetch(`${BASE_URL}/others_blogs/api/blog_list_crud_views/${id}/`, {
        method: 'PUT',
        body: formData,
        headers: headers,
      })
        .then((response) => response.json())
        .then((data) => {
          if (titleRef.current) {
            titleRef.current.value = '';
          }
          if (contentRef.current) {
            contentRef.current.value = '';
          }
          if (blogImgRef.current) {
            blogImgRef.current.value = '';
          }

          history.push('/blogs');
          console.log('Blog edited:', data);
        })
        .catch((error) => {
          console.error('Error editing blog:', error);
        });
    } else {
      console.error('Token not found in localStorage');
    }
  };

  return (
    <IonPage>
      <IonContent>
        <PuToolbar>
          <span slot='title'>Edit Blog</span>
        </PuToolbar>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 10,
          }}
        >
          <PuCard>
            <PuInput label='Title' ref={titleRef}></PuInput>
            <PuInput label='Content' ref={contentRef}></PuInput>
            <input placeholder='Blog img' ref={blogImgRef} type='file' />

            <PuButton onClick={handleEditBlog} style={{ marginTop: 15 }}>
              Edit
            </PuButton>
          </PuCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EditBlog;

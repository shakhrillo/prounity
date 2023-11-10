import { IonContent, IonPage } from '@ionic/react';
import React, { useEffect, useRef } from 'react';
import { PuButton, PuCard, PuImg, PuInput, PuToolbar } from 'react-library';
import { Link, useParams, useHistory } from 'react-router-dom';

const CreateBlog: React.FC = () => {
  const BASE_URL = 'http://192.168.1.185:8000';
  const [blogs, setBlogs] = React.useState([]);
  const history = useHistory();

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);
  const blogImgRef = useRef<HTMLInputElement>(null);

  const handleAddCourse = () => {
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

      fetch(`${BASE_URL}/others_blogs/api/blog_list_views/`, {
        method: 'POST',
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
          console.log('Course created:', data);
        })
        .catch((error) => {
          console.error('Error creating course:', error);
        });
    } else {
      console.error('Token not found in localStorage');
    }
  };

  return (
    <IonPage>
      <IonContent>
        <PuToolbar>
          <span slot='title'>Create Blog</span>
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

            <PuButton onClick={handleAddCourse} style={{ marginTop: 15 }}>
              Add
            </PuButton>
          </PuCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CreateBlog;

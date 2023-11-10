import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useState, useEffect } from 'react';
import {
  PuBadge,
  PuCard,
  PuToolbar,
  defineCustomElements,
} from 'react-library';

defineCustomElements();

interface Favourite {
  id: number;
  content: string;
  name: string;
  author_id: {
    first_name: string;
    last_name: string;
  };
  datetime: string;
  course_logo: string;
}

const Favourites: React.FC = () => {
  const [favourites, setFavourites] = useState<Favourite[]>([]);

  useEffect(() => {
    try {
      const favoritesData = localStorage.getItem('favorites');
      if (favoritesData) {
        setFavourites(JSON.parse(favoritesData));
      }
    } catch (error) {
      console.error('Error parsing favorites data:', error);
    }
  }, []);

  return (
    <IonPage>
      <IonToolbar>
        <IonTitle>Favourites</IonTitle>
      </IonToolbar>
      <IonContent fullscreen>
        <div
          style={{
            width: '100%',
            minHeight: '80%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          {favourites.length === 0 ? (
            <p>No favorites available.</p>
          ) : (
            favourites.map((item) => (
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
                  title={item.content}
                  subtitle={item.name}
                  content={`${item.author_id?.first_name} ${item.author_id?.last_name}`}
                  style={{ padding: '5px', width: '100%' }}
                >
                  <img
                    style={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover',
                    }}
                    slot='img'
                    src={`http://192.168.1.185:8000/${item.course_logo}`}
                    alt=''
                  />
                  <div slot='body'>
                    <h3>{item.name}</h3>
                    <p>{item.content}</p>
                    <PuBadge
                      color='danger'
                      shape='round-3'
                      size='small'
                    ></PuBadge>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Favourites;

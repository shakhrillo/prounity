import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonRow,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Tab1.css';
import {
  logoIonic,
  cartOutline,
  locationOutline,
  refreshOutline,
  calendarOutline,
  tvOutline,
  leafOutline,
} from 'ionicons/icons';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Tab1: React.FC = () => {
  const BASE_URL = 'https://prounity.uz';
  const [recentProducts, setRecentProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedSegment, setSelectedSegment] = useState<string>('popular');

  useEffect(() => {
    getRecentProducts();
    getPopularProducts();
    getCategories();
  }, []);

  const getRecentProducts = async () => {
    const response = await fetch(
      `${BASE_URL}/plants/api/app/plant-recently-viewed/`
    );
    const data = await response.json();
    setRecentProducts(data);
    console.log(data);
  };

  const getPopularProducts = async () => {
    const response = await fetch(`${BASE_URL}/plants/api/app/plant-popular/`);
    const data = await response.json();
    setPopularProducts(data);
  };

  const getCategories = async () => {
    const response = await fetch(
      `${BASE_URL}/plants/api/app/plant-categories/`
    );
    const data = await response.json();
    setCategories(data);
  };

  const getCurrentCategory = async (id) => {
    const response = await fetch(
      `${BASE_URL}/plants/api/app/plant-filter-categories/${id}/`
    );
    const data = await response.json();
    setPopularProducts(data);
  };

  const handleSegmentChange = (event: CustomEvent) => {
    setSelectedSegment(event.detail.value);
  };

  return (
    <>
      <IonMenu contentId='main-content'>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Mia Mhheb</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className='ion-padding'>
          <IonList>
            <IonItem>
              <IonIcon
                style={{ color: 'rgba(36,77,25)', marginRight: 7 }}
                icon={locationOutline}
              ></IonIcon>
              <IonLabel>Location</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon
                style={{ color: 'rgba(36,77,25)', marginRight: 7 }}
                icon={refreshOutline}
              ></IonIcon>
              <IonLabel>History</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon
                style={{ color: 'rgba(36,77,25)', marginRight: 7 }}
                icon={calendarOutline}
              ></IonIcon>
              <IonLabel>List of plants</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon
                style={{ color: 'rgba(36,77,25)', marginRight: 7 }}
                icon={tvOutline}
              ></IonIcon>
              <IonLabel>Tips & Videos</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon
                style={{ color: 'rgba(36,77,25)', marginRight: 7 }}
                icon={leafOutline}
              ></IonIcon>
              <IonLabel>Care of planting trees</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonPage id='main-content'>
        <IonContent color={'light'}>
          <IonToolbar style={{ paddingLeft: 18, paddingRight: 18 }}>
            <div style={{ display: 'flex', gap: 15 }}>
              <IonButtons slot='start'>
                <IonMenuButton
                  color={'light'}
                  style={{
                    background: 'black',
                    width: 50,
                    height: 45,
                    borderRadius: 8,
                  }}
                  autoHide={false}
                ></IonMenuButton>
              </IonButtons>
              <p>
                Hello Mia
                <br />
                <IonText color={'medium'}>Take care of your plants!</IonText>
              </p>
            </div>
            <IonButtons slot='end'>
              <IonButton>
                <IonIcon name={logoIonic}></IonIcon>
              </IonButton>
            </IonButtons>
            <IonButtons slot='end'>
              <IonButton
                style={{
                  backgroundColor: 'rgba(36,77,25)',
                  width: 50,
                  height: 45,
                  borderRadius: 8,
                }}
              >
                <IonIcon color='light' icon={cartOutline}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <div style={{ padding: 10 }} className='searchbar'>
            <IonSearchbar className='searchbar'></IonSearchbar>
          </div>
          <div className='title'>
            <IonText style={{ fontSize: 23 }}>
              <b>Recently Viewed</b>
            </IonText>
          </div>
          <div className='product-list product-list-horizontal'>
            {recentProducts.map((product) => (
              <div className='product' key={product.id}>
                <IonRow>
                  <IonCol size='auto'>
                    <img
                      src={`${BASE_URL}${product.img[0].plant_image}`}
                      alt='product'
                    />
                  </IonCol>
                  <IonCol>
                    <IonText className='product-title'>
                      <h3>{product.plant_name}</h3>
                    </IonText>
                    <IonText color={'medium'} className='product-subtitle'>
                      {product.plant_categories.name}
                    </IonText>
                  </IonCol>
                </IonRow>
              </div>
            ))}
          </div>
          <div className='category-segment'>
            <IonSegment
              value={selectedSegment}
              onIonChange={handleSegmentChange}
            >
              <IonSegmentButton onClick={getPopularProducts} value={'popular'}>
                <IonLabel>Popular</IonLabel>
              </IonSegmentButton>
              {categories.map((category) => (
                <IonSegmentButton
                  key={category.id}
                  onClick={() => getCurrentCategory(category.id)}
                  value={category.name.toLowerCase()}
                >
                  <IonLabel>{category.name}</IonLabel>
                </IonSegmentButton>
              ))}
            </IonSegment>
          </div>
          <div className='product-list all-price-list'>
            {popularProducts.map((product) => (
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to={`/current-plant/${product.id}`}
              >
                <div className='product' key={product.id}>
                  <IonRow style={{ width: 150 }}>
                    <IonCol size='12'>
                      {/* Display the first image for simplicity, you can modify as needed */}
                      <img
                        src={`${BASE_URL}${product.img[0].plant_image}`}
                        alt='product'
                      />
                    </IonCol>
                    <IonCol size='12'>
                      <IonText className='product-title'>
                        {product.plant_name}
                      </IonText>
                      <br />
                      <IonText color={'medium'} className='product-price'>
                        {product.plant_price}$
                      </IonText>
                    </IonCol>
                  </IonRow>
                </div>
              </Link>
            ))}
          </div>
          <div className='banner-container'>
            <div className='banner'>
              <div>
                <IonRow>
                  <IonCol size='8'>
                    <div style={{ display: 'flex', gap: 10 }}>
                      <IonText
                        style={{ fontSize: 27, color: 'rgba(36,77,25)' }}
                        className='banner-title'
                      >
                        <b>Free</b>
                      </IonText>

                      <IonText
                        style={{ marginTop: 10 }}
                        className='banner-subtitle'
                      >
                        Shipping
                      </IonText>
                    </div>
                    <IonButton
                      style={{
                        marginTop: 10,
                        backgroundColor: 'rgba(36,77,25)',
                        color: 'white',
                        width: 140,
                        height: 45,
                        borderRadius: 12,
                      }}
                      className='banner-action'
                      fill='clear'
                      size='small'
                    >
                      <b style={{ fontSize: '18px' }}>Above 50$</b>
                    </IonButton>
                  </IonCol>
                  <IonCol size='4'>
                    <img
                      style={{ height: '100%', objectFit: 'cover' }}
                      src='https://www.pngall.com/wp-content/uploads/12/Delivery-Scooter-PNG-Images-HD.png'
                      alt='banner'
                    />
                  </IonCol>
                </IonRow>
              </div>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Tab1;

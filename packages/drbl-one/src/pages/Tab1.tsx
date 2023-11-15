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
  IonMenuToggle,
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
  search,
  mic,
  micOutline
} from 'ionicons/icons';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Tab1: React.FC = () => {
  const BASE_URL = 'https://prounity.uz';
  const [recentProducts, setRecentProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState([]);
  const [selectedSegment, setSelectedSegment] = useState<string>('popular');
  const location = useLocation();
  
  const [activeItem, setActiveItem] = useState(null);
  const category = [
      {icon: `${locationOutline}`, name: "Location", path:'/location'},
      {icon: `${refreshOutline}`, name: "History",path:'/history'},
      {icon: `${calendarOutline}`, name: "List of Plants", path:'/tab1'},
      {icon: `${tvOutline}`, name: "Tips & Videos", path:'/tips-videos'},
      {icon: `${leafOutline}`, name: "Care of planting trees", path:'/care'},
  ]

  useEffect(() => {
    getRecentProducts();
    getPopularProducts();
    getCategories();
  }, [location]);

  const getRecentProducts = async () => {
    const response = await fetch(
      `${BASE_URL}/plants/api/app/plant-recently-viewed/`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
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

  const getCurrentCategory = async (id: number) => {
    const response = await fetch(
      `${BASE_URL}/plants/api/app/plant-filter-categories/${id}/`
    );
    const data = await response.json();
    setPopularProducts(data);
  };

  const handleSegmentChange = (event: CustomEvent) => {
    setSelectedSegment(event.detail.value);
  };

  const generateRandomColor = (() => {
    const colors = [
      'rgba(255,240,224)',
      'rgba(223,229,253)',
      'rgba(237,238,234)',
      'rgba(255,227,224)',
    ];

    let callCount = 0;

    return () => {
      const color = colors[callCount % colors.length];
      callCount++;

      if (callCount % colors.length === 0) {
        callCount = 0;
      }

      return color;
    };
  })();

  const recentlyProduct = async (id) => {
    const response = await fetch(
      `${BASE_URL}/plants/api/app/plant-recently-viewed/`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plant_id: id,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
    console.log(id);
    console.log('hello world');
  };

  const getUser = async () => {
    try {
      // Get the user token from local storage
      const token = localStorage.getItem('token');
      
      // Set the headers with the token
      const headers = {
        'Authorization': `Bearer ${token}`
      };
  
      const response = await fetch('https://prounity.uz/edu-app/api/authen/api/user_profiles_views/', {
        headers: headers
      });
  
      const data = await response.json();
      setUser(data); 
    } catch (error) {
      console.error('Error fetching location data:', error);
    }
  };

  const handleClick = (index) => {
    setActiveItem(index);
    localStorage.setItem('activeItem', index.toString());
  };

  useEffect(() => {
    const savedActiveItem = localStorage.getItem('activeItem');
    if (savedActiveItem) {
      setActiveItem(parseInt(savedActiveItem));
    }
    getUser()
  }, []);

  return (
    <>
      <IonMenu style={{padding:"20px"}} contentId='main-content'>
          <div style={{padding:20, position:"relative"}}>
            <div style={{display:"flex", justifyContent:"start", gap:"20px", alignItems:"center", marginBottom:30}}>
                <div style={{width:"60px", height:"60px", borderRadius:"50%", border:"2px solid rgba(36,77,25)", padding:"5px"}}>
                    <img style={{width:"100%", height:"100%", borderRadius:"50%"}} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </div>
                <div style={{display:"flex", flexDirection:"column", gap:"8px"}}>
                <p style={{margin:0, fontWeight:"bold", fontSize:"18px"}}>{user.first_name}</p>
                <p style={{margin:0, fontSize:"14px", color:"grey"}}>{user.username}</p>
                </div>
                <IonMenuToggle><IonIcon style={{position:"absolute", right:20, top:20, color:"rgba(36,77,25)"}} icon={close}></IonIcon></IonMenuToggle>
            </div>
            <ul style={{padding:0, margin:0, listStyle:"none"}}>
                {category.map((item,index)=>
                    <Link to={item.path}>
                    <IonMenuToggle>
                    <li
                     style={{display:"flex", alignItems:"center", padding:"0 15px", borderRadius:10, backgroundColor: activeItem === index ? 'rgba(36,77,25)' : 'transparent', color: activeItem === index ? 'white' : 'black',}}
                     onClick={() => handleClick(index)}
                     >
                    <IonIcon
                      style={{ color: activeItem === index ? 'white' : 'rgba(36,77,25)', marginRight: 10, fontSize:"26px"}}
                      icon={`${item.icon}`}
                    ></IonIcon>
                    <p style={{fontSize:"18px"}}>{item.name}</p>
                    </li>
                    </IonMenuToggle>
                    </Link>
                )}
            </ul>
            </div>
        </IonMenu>
      <IonPage id='main-content'>
        <IonContent color={'light'}>
          <IonToolbar
            color={'light'}
            style={{
              paddingLeft: 18,
              paddingRight: 18,
              paddingTop: 20,
            }}
          >
            <div style={{ display: 'flex', gap: 15 }}>
              <IonButtons slot='start'>
                <IonMenuButton
                  color={'light'}
                  style={{
                    background: 'black',
                    width: 50,
                    height: 50,
                    borderRadius: 8,
                  }}
                  autoHide={false}
                ></IonMenuButton>
              </IonButtons>
              <p style={{ fontSize: 20 }}>
                Hello Mia
                <br />
                <IonText style={{ fontSize: 16 }} color={'medium'}>
                  Take care of your plants!
                </IonText>
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
                  height: 50,
                  borderRadius: 8,
                }}
              >
                <IonIcon
                  color='light'
                  size='large'
                  icon={cartOutline}
                ></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <div style={{ padding: "0 20px" }} className='searchbar'>
            <div className='body-searchbar'>
              <IonIcon className='icon' icon={search}></IonIcon>
              <input placeholder='Search' type="text" />
              <IonIcon className='icon' icon={micOutline}></IonIcon>
            </div>
          </div>
          <div className='title' style={{ marginTop: 15 }}>
            <IonText style={{ fontSize: 23 }}>
              <b>Recently Viewed</b>
            </IonText>
          </div>
          <div className='product-list product-list-horizontal recently-list'>
            {recentProducts.map((product) => (
              <div className='product' key={product.id}>
                <IonRow
                  style={{
                    height: '100%',
                    display: 'flex',
                    gap: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IonCol
                    style={{
                      width: '80px',
                      height: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: generateRandomColor(),
                      borderRadius: 15,
                    }}
                    size='auto'
                  >
                    <img
                      src={`${BASE_URL}${product?.plant_id?.img[0].plant_image}`}
                      alt='product'
                    />
                  </IonCol>
                  <IonCol>
                    <IonText className='product-title'>
                      <h3>{product?.plant_id.plant_name}</h3>
                    </IonText>
                    <IonText color={'medium'} className='product-subtitle'>
                      {product?.plant_id?.plant_categories.name}
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
              className='segment-active'
            >
              <IonSegmentButton onClick={getPopularProducts} value={'popular'}>
                <IonLabel>Popular</IonLabel>
                <div className='segment-indicator'></div>
              </IonSegmentButton>
              {categories.map((category) => (
                <IonSegmentButton
                  key={category.id}
                  onClick={() => getCurrentCategory(category.id)}
                  value={category.name.toLowerCase()}
                >
                  <IonLabel>{category.name}</IonLabel>
                  <div className='segment-indicator'></div>
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
                    <IonCol
                      onClick={() => recentlyProduct(product.id)}
                      style={{
                        width: '100%',
                        background: generateRandomColor(),
                        borderRadius: 15,
                      }}
                      size='12'
                    >
                      <img
                        style={{ objectFit: 'cover' }}
                        src={`${BASE_URL}${product.img[0].plant_image}`}
                        alt='product'
                      />
                    </IonCol>
                    <IonCol size='12'>
                      <IonText className='product-title'>
                        {product.plant_name.length > 18
                          ? `${product.plant_name.slice(0, 16)}...`
                          : product.plant_name}
                      </IonText>
                      <br />
                      <IonText color={'medium'} className='product-price'>
                        <b>{product.plant_price}$</b>
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

                  <img
                    style={{ objectFit: 'cover' }}
                    src='https://www.pngall.com/wp-content/uploads/12/Delivery-Scooter-PNG-Images-HD.png'
                    alt='banner'
                  />
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

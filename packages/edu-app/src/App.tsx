import { Redirect, Route } from 'react-router-dom';
import { IonApp, setupIonicReact } from '@ionic/react';
import TabBar from './pages/teacher/TabBar';
import { useEffect } from 'react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

import React from 'react';

const App: React.FC = () => {
  const [role, setRole] = React.useState('');

  useEffect(() => {
    getRole();
  }, []);

  const getRole = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(
      `http://192.168.1.185:8000/authen/api/user_profiles_views/`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    const role = data.groups[0].name;
    setRole(role);
  };

  return <IonApp>{role === 'teacher' ? <TabBar /> : <h1>student</h1>}</IonApp>;
};

export default App;

// const App: React.FC = () => (
//   <IonApp>
//     <TabBar />
//   </IonApp>
// );

// export default App;

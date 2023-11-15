import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  basket,
  ellipse,
  home,
  settings,
  square,
  triangle,
} from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

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
import CurrentPlant from './pages/CurrenPlant/CurrentPlant';
import TipsVideos from './pages/Tips-videos/Tips-videos';
import TipsVideosDetails from './pages/Tips-videos-details/Tips-videos-details';
import Signin from './pages/sign-in/Signin';
import Signup from './pages/signup/Signup';
import Location from './pages/location/Location';
import History from './pages/history/History';
import Care from './pages/care/Care';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path='/tab1'>
            <Tab1 />
          </Route>
          <Route exact path='/tab2'>
            <Tab2 />
          </Route>
          <Route path='/tab3'>
            <Tab3 />
          </Route>
          <Route path='/current-plant/:id'>
            <CurrentPlant />
          </Route>
          <Route exact path='/tips-videos'>
            <TipsVideos />
          </Route>
          <Route exact path='/tips-videos/:id'>
            <TipsVideosDetails />
          </Route>
          <Route exact path='/'>
            <Redirect to='/tab1' />
          </Route>
          <Route path='/sign-in'>
            <Signin />
          </Route>
          <Route path='/sign-up'>
            <Signup />
          </Route>
          <Route path='/location'>
            <Location />
          </Route>
          <Route path='/care'>
            <Care />
          </Route>
          <Route path='/history'>
            <History />
          </Route>
        </IonRouterOutlet>
        <IonTabBar className='tabbar' slot='bottom'>
          <IonTabButton tab='tab1' href='/tab1'>
            <IonIcon aria-hidden='true' icon={home} />
          </IonTabButton>
          <IonTabButton tab='tab2' href='/tab2'>
            <IonIcon aria-hidden='true' icon={basket} />
          </IonTabButton>
          <IonTabButton tab='tab3' href='/tab3'>
            <IonIcon aria-hidden='true' icon={settings} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

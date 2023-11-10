import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
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
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import Courses from './pages/student/Couses';
import Blogs from './pages/student/Blogs';
import Favoutites from './pages/student/Favourites';
import Profile from './pages/student/Profile';
import EditProfile from './pages/student/EditProfile';
import Coursedetail from './pages/student/Coursedetail';
import Blogdetail from './pages/student/Blogdetail';
import Category from './pages/student/Category';
import Categorydetail from './pages/student/Categorydetail';
import Mycourses from './pages/student/Mycourses';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/courses">
            <Courses />
          </Route>
          <Route exact path="/course-detail/:id">
            <Coursedetail />
          </Route>
          <Route exact path="/blogs">
            <Blogs />
          </Route>
          <Route exact path="/blog-detail/:id">
            <Blogdetail />
          </Route>
          <Route path="/favourites">
            <Favoutites />
          </Route>
          <Route path="/my-courses">
            <Mycourses />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/categories">
            <Category />
          </Route>
          <Route path="/category-detail/:id">
            <Categorydetail />
          </Route>
          <Route path="/sign-up">
            <Signup />
          </Route>
          <Route path="/sign-in">
            <Signin />
          </Route>
          <Route path="/profile-edit">
            <EditProfile />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/courses">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>Courses</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/blogs">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Blogs</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/favourites">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Favouite</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/profile">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

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
import { ellipse, square, triangle } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';
import Courses from './Couses';
import Coursedetail from './Coursedetail';
import Blogs from './Blogs';
import Blogdetail from './Blogdetail';
import Mycourses from './Mycourses';
import Favourites from './Favourites';
import Profile from './Profile';
import Category from './Category';
import Categorydetail from './Categorydetail';
import Signup from '../signup/Signup';
import Signin from '../signin/Signin';
import EditProfile from './EditProfile';

const Tabbar = () => {
  return <div>
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
            <Favourites />
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
            <Redirect to="/courses" />
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
  </div>;
}

export default Tabbar
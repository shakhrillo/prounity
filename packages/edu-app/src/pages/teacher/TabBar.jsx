import React from "react";
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
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from '../Tab1';
import Tab2 from '../Tab2';
import Tab3 from '../Tab3';
import Course from "./course/Course";
import CurrentCourse from './course/CurrentCurse'
import CreateCourse from './course/CreateCourse'
import Blogs from './blogs/Blogs'
import CreateBlog from './blogs/CreateBlog'
import EditBlog from './blogs/EditBlog'
import Profile from './profile/Profile'
import EditProfile from "./profile/EditProfile";
import EditCourse from './course/EditCourse'
import CreateLesson from './course/lesson/CreateLesson'

const TabBar = () => {
    return <div>
        <IonApp>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route exact path="/course">
                            <Course />
                        </Route>
                        <Route exact path="/pro">
                            <Profile />
                        </Route>
                        <Route exact path="/current-course/:id">
                            <CurrentCourse />
                        </Route>
                        <Route exact path="/create-course">
                            <CreateCourse />
                        </Route>
                        <Route exact path="/edit-course/:id">
                            <EditCourse />
                        </Route>
                        <Route exact path="/create-lesson/:id">
                            <CreateLesson />
                        </Route>
                        <Route exact path="/blogs">
                            <Blogs />
                        </Route>
                        <Route exact path="/create-blog">
                            <CreateBlog />
                        </Route>
                        <Route exact path="/edit-blog/:id">
                            <EditBlog />
                        </Route>
                        <Route exact path="/tab3">
                            <Profile />
                        </Route>
                        <Route exact path="/edit-profile">
                            <EditProfile />
                        </Route>

                        <Route exact path="/">
                            <Redirect to="/course" />
                        </Route>
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom">
                        <IonTabButton tab="course" href="/course">
                            <IonIcon aria-hidden="true" icon={triangle} />
                            <IonLabel>Course</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="blogs" href="/blogs">
                            <IonIcon aria-hidden="true" icon={ellipse} />
                            <IonLabel>Blogs</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="tab3" href="/tab3">
                            <IonIcon aria-hidden="true" icon={square} />
                            <IonLabel>Profile</IonLabel>
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </IonReactRouter>
        </IonApp>
    </div>;
};

export default TabBar;

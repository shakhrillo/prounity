import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonSearchbar } from '@ionic/react';
import { log } from 'console';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Location: React.FC = () => {

    const [location, setLocation] = useState([])

    const getLocation = async () => {
        try {
          const response = await fetch('https://prounity.uz/plants/api/app/plant-location-market/');
          const data = await response.json();
          setLocation(data); 
        } catch (error) {
          console.error('Error fetching location data:', error);
        }
      };

    useEffect(() => {
        getLocation();
    }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Location</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{width:"100%", height:"100%", padding:"24px"}}>
            <IonSearchbar></IonSearchbar>
            <IonAccordionGroup expand='inset'>
                {location.map(item=>
                    <IonAccordion value="first">
                    <IonItem slot="header" color="light">
                        <IonAvatar style={{marginRight:"20px"}}>
                            <img alt="Silhouette of a person's head" src={`https://prounity.uz${item.location_img}`} />
                        </IonAvatar>
                        <IonLabel>{item.location_name}</IonLabel>
                    </IonItem>
                    <div style={{background:"rgba(36,77,25)"}} className="ion-padding" slot="content">
                        <iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12269.150719992858!2d64.44373424999999!3d39.755648900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1699947385822!5m2!1sen!2s" width="100%" height="200" style={{borderRadius:"20px", border:"none"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </IonAccordion>
                )}
                
                
                
            </IonAccordionGroup>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Location;

// import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonSearchbar } from '@ionic/react';
// import { useEffect, useState } from 'react';

// const Location: React.FC = () => {
//   const [location, setLocation] = useState([]);

//   const getLocation = async () => {
//     try {
//       const response = await fetch('https://prounity.uz/plants/api/app/plant-location-market/');
//       const data = await response.json();
//       setLocation(data);
//     } catch (error) {
//       console.error('Error fetching location data:', error);
//     }
//   };

//   useEffect(() => {
//     getLocation();
//   }, []);

//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>Location</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent fullscreen>
//         <div style={{ width: "100%", height: "100%", padding: "24px" }}>
//           <IonSearchbar></IonSearchbar>
//           <IonAccordionGroup value={"first"} expand='inset'>
//             {location.map(item =>
//               <IonAccordion key={item.location_name} value={item.location_name}>
//                 <IonItem slot="header" color="light">
//                   <IonAvatar style={{ marginRight: "20px" }}>
//                     <img alt="Silhouette of a person's head" src={`https://prounity.uz${item.location_img}`} />
//                   </IonAvatar>
//                   <IonLabel>{item.location_name}</IonLabel>
//                 </IonItem>
//                 <div style={{ background: "rgba(36,77,25)" }} className="ion-padding" slot="content">
//                   <iframe sandbox="allow-same-origin" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3230.581853168669!2d-79.2132036!3d35.93273380000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89accfeddcb2765b%3A0x35fe7d9cbd760866!2sPiedmont%20Feed%20%26%20Garden%20Center!5e0!3m2!1sen!2s!4v1699960655124!5m2!1sen!2s" width="100%" height="200" style={{ borderRadius: "20px", border: "none" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
//                 </div>
//               </IonAccordion>
//             )}
//             <IonAccordion value="second">
//               {/* Rest of your code */}
//             </IonAccordion>
//             <IonAccordion value="third">
//               {/* Rest of your code */}
//             </IonAccordion>
//           </IonAccordionGroup>
//         </div>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Location;

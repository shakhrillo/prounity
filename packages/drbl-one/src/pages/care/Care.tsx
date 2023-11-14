import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonSearchbar, IonButton, IonIcon } from '@ionic/react';
import { Link } from 'react-router-dom';
import { heart } from 'ionicons/icons';

const Care: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Care of Planting Trees</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{width:"100%", height:"100%", padding:"24px"}}>
            <IonSearchbar style={{padding:0, marginBottom:"20px"}}></IonSearchbar>
            <div style={{width:"100%", display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                <div style={{width:"160px", height:"230px", boxShadow:"1px 1px 3px 3px grey", marginBottom:"20px", borderRadius:"14px", padding:"10px", display:"flex", flexDirection:"column", justifyContent:"space-between"}} >
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <p style={{color:"grey"}}>Indoor</p>
                        <IonIcon color={'secondary'} icon={heart}></IonIcon>
                    </div>
                    <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
                        <img style={{width:"120px", height:"100px"}} src="https://cdn11.bigcommerce.com/s-ynkbm3qo/images/stencil/1280x1280/products/3919/12201/2006111-Low-Res-PNG-1000p-x-1000p__63290.1631207249.png?c=2" alt="" />
                    </div>
                    <div>
                        <p style={{margin:0, fontSize:"20px", fontWeight:"bold"}}>Instrumen</p>
                        <p style={{margin:0, fontSize:"14px"}}>From 15%</p>
                    </div>
                </div>
                <div style={{width:"160px", height:"230px", boxShadow:"1px 1px 3px 3px grey", marginBottom:"20px", borderRadius:"14px", padding:"10px", display:"flex", flexDirection:"column", justifyContent:"space-between"}} >
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <p style={{color:"grey"}}>Indoor</p>
                        <IonIcon color={'secondary'} icon={heart}></IonIcon>
                    </div>
                    <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
                        <img style={{width:"120px", height:"100px"}} src="https://cdn11.bigcommerce.com/s-ynkbm3qo/images/stencil/1280x1280/products/3919/12201/2006111-Low-Res-PNG-1000p-x-1000p__63290.1631207249.png?c=2" alt="" />
                    </div>
                    <div>
                        <p style={{margin:0, fontSize:"20px", fontWeight:"bold"}}>Instrumen</p>
                        <p style={{margin:0, fontSize:"14px"}}>From 15%</p>
                    </div>
                </div>
                <div style={{width:"160px", height:"230px", boxShadow:"1px 1px 3px 3px grey", marginBottom:"20px", borderRadius:"14px", padding:"10px", display:"flex", flexDirection:"column", justifyContent:"space-between"}} >
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <p style={{color:"grey"}}>Indoor</p>
                        <IonIcon color={'secondary'} icon={heart}></IonIcon>
                    </div>
                    <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
                        <img style={{width:"120px", height:"100px"}} src="https://cdn11.bigcommerce.com/s-ynkbm3qo/images/stencil/1280x1280/products/3919/12201/2006111-Low-Res-PNG-1000p-x-1000p__63290.1631207249.png?c=2" alt="" />
                    </div>
                    <div>
                        <p style={{margin:0, fontSize:"20px", fontWeight:"bold"}}>Instrumen</p>
                        <p style={{margin:0, fontSize:"14px"}}>From 15%</p>
                    </div>
                </div>
            </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Care;

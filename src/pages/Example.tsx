import { useState, useEffect } from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonInput, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Example: React.FC = () => {
  const [input, setInput] = useState<string>('')

  useEffect(() =>{
    console.log(input)
  }, [input]);

  return (

    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
      <IonInput value={input} 
      onIonChange={(e: any) => setInput(e.target.value)}></IonInput>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Firebase Example</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>

    </IonPage>
  );
};

export default Example;

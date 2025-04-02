import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  IonButton, 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonInput, 
  IonTitle, 
  IonToolbar, 
  IonToast, 
  IonLoading
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | undefined>(undefined);

  function loginUser() {
    if (!Username || !password) {
      setToastMessage('Please enter both username and password');
    } else {
      setToastMessage(`Logging in as ${Username}`);
    }
    setShowToast(true);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonInput 
          placeholder="Username?" 
          onIonChange={(e: any) => setUsername(e.target.value)}
        />
        <IonInput 
          placeholder="Password?" 
          type="password"
          onIonChange={(e: any) => setPassword(e.target.value)}
        />
        <IonButton expand="block" onClick={loginUser}>Login</IonButton>
        <p>
          New here? <Link to="/register">Register</Link>
        </p>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;

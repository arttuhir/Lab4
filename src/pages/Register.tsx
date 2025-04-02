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
  IonToast 
} from '@ionic/react';
import { registerUser } from '../firebaseConfig';
import './Home.css';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [toastMessage, setToastMessage] = useState<string | undefined>(undefined);

  async function handleRegister() {
    if (password !== cpassword) {
      setToastMessage('❌ Passwords do not match!');
      return;
    }
    if (username.trim() === '' || password.trim() === '') {
      setToastMessage('Username and password are required!');
      return;
    }

    const success = await registerUser(username, password);
    if (success) {
      setToastMessage('Registration successful!');
    } else {
      setToastMessage('Registration failed. Try again.');
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className='ion-padding'>
        <IonInput 
          placeholder="Username" 
          value={username}
          onIonInput={(e) => setUsername(e.detail.value!)} 
        />

        <IonInput 
          type="password"
          placeholder="Password" 
          value={password}
          onIonInput={(e) => setPassword(e.detail.value!)} 
        />

        <IonInput 
          type="password"
          placeholder="Confirm Password" 
          value={cpassword}
          onIonInput={(e) => setCPassword(e.detail.value!)} 
        />
        
        <IonButton expand="block" onClick={handleRegister}>Register</IonButton>

        <p>Already have an account? <Link to="/login">Login</Link></p>

       
        <IonToast
          isOpen={!!toastMessage}
          message={toastMessage}
          duration={3000}
          onDidDismiss={() => setToastMessage(undefined)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Register;

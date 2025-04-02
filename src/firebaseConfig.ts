import { initializeApp } from 'firebase/app'; 
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from './toast';

// Your Firebase config
const config = {
    apiKey: "AIzaSyCSOGkun3Fm1vilv8vcOgbGQPMfCWJd5ho",
    authDomain: "fb-1-8039b.firebaseapp.com",
    projectId: "fb-1-8039b",
    storageBucket: "fb-1-8039b.firebasestorage.app",
    messagingSenderId: "912351940580",
    appId: "1:912351940580:web:acff9a0be63f2b5e5a01f1"
};

// Initialize Firebase
const app = initializeApp(config);

// Initialize Firebase Auth
const auth = getAuth(app);



// Register function (✅ Fixed version)
export async function registerUser(username: string, password: string): Promise<boolean> {
    const email = `${username}@codedamn.com`;

    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        console.log("✅ Registration successful:", res);
        return true;
    } catch (error) {
        if (error instanceof Error) {
            toast(error.message, 4000); // Now TypeScript knows error has a message property
        } else {
            toast("An unknown error occurred", 4000);
        }
        return false;
    }
}

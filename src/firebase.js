import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Om du använder Firestore

// Firebase-konfiguration
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_PROJECT_ID.appspot.com',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

// Initiera Firebase-appen
const app = initializeApp(firebaseConfig);

// Initiera Firestore-databasen
const db = getFirestore(app);

export { db };


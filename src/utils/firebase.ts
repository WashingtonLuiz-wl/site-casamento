import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBew84RjLr37M5NveOKxr7L-OwyBzlxD9U',
  authDomain: 'site-casamento-92c66.firebaseapp.com',
  projectId: 'site-casamento-92c66',
  storageBucket: 'site-casamento-92c66.appspot.com',
  messagingSenderId: '239586759915',
  appId: '1:239586759915:web:c28219104bb01a5b0c1aae',
  measurementId: 'G-Q508HKZSTQ',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const database = getDatabase(app);

export { storage, database };

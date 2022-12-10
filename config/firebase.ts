import { initializeApp } from '@firebase/app';
import { getAuth, GithubAuthProvider } from '@firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBiIBgVpQdB3nNEflP0X-WS8fnh1J4bT9U',
  authDomain: 'github-manager-82444.firebaseapp.com',
  projectId: 'github-manager-82444',
  storageBucket: 'github-manager-82444.appspot.com',
  messagingSenderId: '286929828083',
  appId: '1:286929828083:web:4913cb44b20cc6d6145f86',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const githubAuthProvider = new GithubAuthProvider();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from '@shopify/polaris';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

import './index.css';
import '@shopify/polaris/styles.css';

const config = {
  apiKey: 'AIzaSyCmNbQp1HUNHDdUVbLuWnOsdfzRTQtTglM',
  authDomain: 'shopifyappfirebase.firebaseapp.com',
  databaseURL: 'https://shopifyappfirebase.firebaseio.com',
  projectId: 'shopifyappfirebase',
  storageBucket: 'shopifyappfirebase.appspot.com',
  messagingSenderId: '416114328098'
};
firebase.initializeApp(config);

const apiKey = window.apiKey;
const shopOrigin = window.shopOrigin;

ReactDOM.render(
  <AppProvider apiKey={apiKey} shopOrigin={shopOrigin}>
    <App />
  </AppProvider>,
  document.getElementById('root')
);

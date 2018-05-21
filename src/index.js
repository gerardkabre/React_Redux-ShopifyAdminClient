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

console.log(window.apiKey)

console.log(window.shopOrigin)

const apiKey = 'a7d677447e3c32694d5de163429820fb';
const shopOrigin = 'https://gerardkabre.myshopify.com';

ReactDOM.render(
  <AppProvider apiKey={apiKey} shopOrigin={shopOrigin}>
    <App />
  </AppProvider>,
  document.getElementById('root')
);

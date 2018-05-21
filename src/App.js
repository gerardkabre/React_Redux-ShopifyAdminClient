import React, { Component } from 'react';
import firebase from 'firebase';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Page, Card, Button, Layout } from '@shopify/polaris';

import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

import './App.css';

class App extends Component {
  render() {

    return <Settings />;
  }
}

export default App;


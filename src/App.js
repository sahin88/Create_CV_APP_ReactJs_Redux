
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from './hocs/Layout';
import MainForm from './components/MainForm';
import MainTemplate from './components/MainTemplate';

import React, { useState, useEffect } from 'react';

function App() {
  const [eventData, setEventData] = useState({ name: '', email: '', phone: '' });

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={MainForm} eventData={eventData} setEventData={setEventData} />
          <Route exact path="/template" component={MainTemplate} eventData={eventData} setEventData={setEventData} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

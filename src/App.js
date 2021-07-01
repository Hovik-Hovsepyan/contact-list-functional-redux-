import React from 'react';

import { Tabs, Tab } from 'react-tab-view';

import Contacts from './components/Contacts';

import './App.css';

import Favourites from './components/Favourites';


export const App = () => {
  const headers = ['All Contacts', 'Favourites'];
  
    return (
      <div>
        <Tabs headers={headers}>
          <Tab>
            <Contacts />
          </Tab>
          <Tab>
            <Favourites />
          </Tab>
        </Tabs>
      </div>
    )
}

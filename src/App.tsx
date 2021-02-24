import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Router from './router';
import store from './store';
import AppInitializer from './AppInitializer';



const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AppInitializer>
        <Router />
      </AppInitializer>
    </BrowserRouter>
  </Provider>
)

export default App;
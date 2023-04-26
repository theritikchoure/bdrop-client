import React from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from './config/configureStore.js';
import { setUpToken } from './helper/authTokenHelpers';
import jwt_decode from 'jwt-decode';
import { setCurrentUser } from './redux/actions/authActions';
import { decrypt } from './helper/common';

const store = configureStore();
const container = document.getElementById('root');
const root = createRoot(container);

const token = setUpToken();
if (token) {
    const decryptedToken = decrypt(token);
  const decoded = jwt_decode(decryptedToken);
  store.dispatch(setCurrentUser(decoded));
}


root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App tab="home" />
        </BrowserRouter>
    </Provider>
);
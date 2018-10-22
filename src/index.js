import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './config/store';
import './index.css';

const app = <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>    
</Provider>
ReactDOM.render(app, document.getElementById('root'));

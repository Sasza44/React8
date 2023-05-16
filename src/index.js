import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app.js';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
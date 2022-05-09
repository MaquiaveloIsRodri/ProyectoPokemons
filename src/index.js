import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunks from 'redux-thunk';
import PokemonReducer from './reducers/Pokemon';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeAlt = composeEnhancers(applyMiddleware(thunks));

 
const store = createStore(PokemonReducer, composeAlt);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);


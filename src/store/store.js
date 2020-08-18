import { createStore, compose, applyMiddleware } from 'redux';
import serviceReducer from './reducers/service';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(serviceReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

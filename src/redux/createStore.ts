
import {
    createStore, compose, applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import { pexesoReducer } from './pexesoReducer';

const composeWithDevtools =
    process.env.NODE_ENV !== 'production'
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        : compose;

const enhancers = composeWithDevtools(applyMiddleware(thunk));

export const store = createStore(pexesoReducer, enhancers);

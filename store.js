import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import data from './src/reducers/home.reducers';

const reducers = combineReducers({
  news: data,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

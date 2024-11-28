import { createStore } from 'redux';
import todosReducer from './reducers/CounterReducer';

export const store = createStore(todosReducer)
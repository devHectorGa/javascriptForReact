import { createStore } from './redux/index.js';
import reducer from './reducers/index.js';

const INITIAL_STATE = { calorics: 0, clicks: 1360563 };

const store = createStore(reducer, INITIAL_STATE);

export default store;

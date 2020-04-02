import { createStore } from 'redux';
import rootReducer from '../reducers/index'

const store = createStore(rootReducer);//１つにまとめたreducerをcreatestoreに格納する

export default store;
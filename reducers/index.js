import { combineReducers } from 'redux';//最終的に１つのreducerを作るもの
import { todoReducer } from './todoReducer';
import { visibleFilterReducer } from './visibleFilterReducer';

const rootReducer = combineReducers({
    todos: todoReducer,//配列がセット
    visibleFilter: visibleFilterReducer//文字列がセット
});

export default rootReducer;
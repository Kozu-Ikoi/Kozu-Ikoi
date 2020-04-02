import store from '../../store';
import { SHOW_ALL } from '../../actions/visibleFilterActionCreator';

describe('store/index.jsのテスト',()=>{
    it('combineReducers()を使ったstateを持つ',()=>{
        expect(store.getState()).toStrictEqual({
            todos: [],//デフォルト、todoReducerは最初は空配列だった
            visibleFilter: SHOW_ALL//デフォルトvisibleFilterReducerは最初はSHOW_ALLだった
        });
    });
});
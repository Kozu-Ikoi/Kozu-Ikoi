import { visibleFilterReducer }from '../../reducers/visibleFilterReducer';
import {
    showAll,//actionクリエーター
    showActive,
    showCompleted,
    SHOW_ALL,//actionタイプ
    SHOW_ACTIVE,
    SHOW_COMPLETED
} from '../../actions/visibleFilterActionCreator';

describe('visibleFilterReducerのテスト', ()=>{
    const createInitialState = ()=>{
        const mockAction = {};
        const state = visibleFilterReducer(undefined, mockAction);

        return state;//actionタイプが空なのでデフォルトのSHOW_ALLがかえる
    };

    it('stateの初期値はSHOW_ALL',()=>{//初期値のテスト
        const state = createInitialState();
        expect(state).toStrictEqual(SHOW_ALL);
    });

    it('action.type ===SHOW_ALLの時、文字列"SHOW_ALL"を返す',()=>{
        const state = createInitialState();

        //SHOW_ALLのアクションを渡す
        const action = showAll();
        const newState = visibleFilterReducer(state, action);
        expect(newState).toStrictEqual(SHOW_ALL);
    });

    it('action.type === SHOW_ACTIVEの時”SHOW_ACTIVEを返す',()=>{
        const state = createInitialState();

        //SHOW_ACTIVEのアクションを渡す
        const action = showActive();//showActiveを実行すると、SHOW_ACTIVEタイプがかえる
        const newState = visibleFilterReducer(state,action);//stateにactionを追加
        expect(newState).toStrictEqual(SHOW_ACTIVE);
    });

    it('action.type === SHOW_COMPLETEDの時"SHOW_COMPLETED"を返す',()=>{
        const state = createInitialState();

        const action = showCompleted();
        const newState = visibleFilterReducer(state,action);
        expect(newState).toStrictEqual(SHOW_COMPLETED);
    });

});
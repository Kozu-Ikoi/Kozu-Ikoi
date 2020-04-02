import { todoReducer } from '../../reducers/todoReducer';
import{
    addTodo,
    deleteTodo,
    toggleTodoCompleted
} from '../../actions/todoActionCreator';
import Todo from '../../models/Todo';

describe('todoReducerのテスト',()=>{
    it('action.type === ADD_TODOの時、Todo１件追加した配列を返す',()=>{
        const dummyText = 'ダミーテキスト'
        const action = addTodo(dummyText);
        const initialState = [];//デフォルトは空配列
        const newState = todoReducer(initialState, action);//空配列に新しい１件が追加
        const todo = new Todo(dummyText);

        expect(newState).toStrictEqual([todo]);//配列が追加されるはず
    });

    it('action.type === DELETE_TODOの時、index番号の要素を',()=>{
        //テスト動作確認用にダミーデータを３件取得
        const prefixText = 'テスト'
        let state = [];
        for(let i=0; i<3; i++){
            const text = prefixText + i;
            const action = addTodo(text);
            state = todoReducer(state, action);
        }

        const todo0 = new Todo(`${prefixText}0`);
        const todo1 = new Todo(`${prefixText}1`);
        const todo2 = new Todo(`${prefixText}2`);

        expect(state).toStrictEqual([
            todo0,
            todo1,
            todo2
        ]);

        //インデックス番号１を指定して
        //「action.type === DELETE_TODO」でreducerを実行
        const targetIndex = 1;
        const deleteAction = deleteTodo(targetIndex);
        state = todoReducer(state, deleteAction);//stateから番号１を削除する
        expect(state).toStrictEqual([
            todo0,
            todo2
        ]);
    });

    it('action.type === TOGGLE_TODO_COMPLETEDのcompletedが切り替わったた配列を返す', ()=>{
        let state = [];
        const addAction = addTodo('ダミー');
        const targetIndex = 0;

        state = todoReducer(state, addAction);

        expect(state[targetIndex].hasCompleted()).toStrictEqual(false);//最初の１件目はfalseのはず
        const toggleAction = toggleTodoCompleted(targetIndex);
        state = todoReducer(state, toggleAction);//TOGGLE_TODO_CPMPLETEDが採用されるが、最初のif文はスルー

        expect(state[targetIndex].hasCompleted()).toStrictEqual(true);//toggleによりtrueに切り替わる
    });
});
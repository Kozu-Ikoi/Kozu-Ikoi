import {//actionタイプを取得
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO_COMPLETED
} from '../actions/todoActionCreator';
import Todo from '../models/Todo';

export const todoReducer = (state = [], action) =>{
    switch(action.type){
        case ADD_TODO:
            const todo = new Todo(action.text);//新しいtodoを作成
            return[
                ...state,
                todo
            ];//新しいtodoを末尾に追加する
        case DELETE_TODO:
            return state.filter((todo, index) =>{
                return action.index !== index;
            });
        case TOGGLE_TODO_COMPLETED:
            return state.map((todo,index) =>{
                if(action.index !== index){//1件目のデータの場合は１つしかないのでスルーされる
                    return todo;
                }

                const targetTodo = new Todo(todo.text);//そのまま更新はよくないので新しいtodoを作成している
                if( !todo.hasCompleted() ){//hasCompletedがfalseの時はtrueにしてあげる
                    targetTodo.toggle();//デフォルトはfalseなのでもしhasCompletedがtrueの時はそのままtargetTodoを返す
                }

                return targetTodo;//これによってindex番号に対応したものだけが返るようになる。最終的にtrueに切り替わる
            });
            default:
                return state;
    }
};
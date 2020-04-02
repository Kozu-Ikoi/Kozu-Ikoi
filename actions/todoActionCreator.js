
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO_COMPLETED = 'TOGGLE_TODO_COMPLETED';


export const addTodo = (text)=>{//追加
    return{
        type: ADD_TODO,
        text
    }
};

export const deleteTodo = (index)=>{//削除
    return{
        type: DELETE_TODO,
        index
    }
};

export const toggleTodoCompleted = (index)=>{//反転
    return{
        type: TOGGLE_TODO_COMPLETED,
        index
    }
};
const ADD_TODO = "ADD_TODO";
const UPDATE_TODO ="UPDATE_TODO";

const initialState = [];

export const addTodo = (payload) =>{
    return {
        type : ADD_TODO,
        payload : payload,
    }
}

// 아래의 함수를 reducer라 칭한다. action의 type에 따라 분기처리를 할 수 있다.
const todolist = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const addTodo ={
                id: Date.now(),
                title: action.payload.title,
                memo: action.payload.memo,
                isDone : false,
            }
            return [...state,addTodo];
        case UPDATE_TODO:

            return state;
        default:
            return state;
    }
}

export default todolist;
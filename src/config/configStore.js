import { createStore } from "redux";
import { combineReducers } from "redux";
import todolist from "../modules/todolist";


// Reducer들을 객체로 구성해서 인자로 넘겨 combineReducers를 이용해 묶어준다.
// 그걸 rootReducer라는 이름의 변수로 주소를 저장한다.
// 전역관리를 할 reducer들을 property로 넣어준다.(counter,users)
const rootReducer = combineReducers({
    todolist,
});



// 묶은 rootReducer를 createStore 함수를 통해 Store를 만들어서 이걸 export 시킨다.
const store = createStore(rootReducer);


export default store;
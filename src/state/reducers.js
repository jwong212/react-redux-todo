import { 
		VisibilityFilters, 
		SET_VISIBILITY_FILTER, 
		ADD_TODO, 
		TOGGLE_TODO 
} from "./actions.js";
import {combineReducers} from "redux"

const { SHOW_ALL } = VisibilityFilters

const initialState = {
	visibilityFilter: VisibilityFilters.SHOW_ALL,
	todos : []
};

// We can replace the below main reducer with combineReducers
// function todoApp(state = initialState, action) {
// 	return {
// 		visibilityFilter: setVisibility(state.visibilityFilter, action),
// 		todos: todos(state.todos, action)
// 	};
// }


const todoApp = combineReducers({
	visibilityFilter,
	todos
});

function todos(state = [], action) {
	switch(action.type) {
		case ADD_TODO:
			var s =  [
					...state, 
					{
						text: action.text, 
						id: action.id,
						completed: false
					}
			];
			console.log(s);
			return s;
		case TOGGLE_TODO:
			console.log(action.index);
			let s = state.map((t, idx)=>{

					if(idx == action.index) {
						return Object.assign({}, t, {
							completed: !t.completed
						});
					}

					return t;
				});
			console.log(s);
			return s;

		default:
			return state;
	}
	return state;
}

function visibilityFilter(state = SHOW_ALL, action) {
	switch(action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state;
	}

	return state;
}

export default todoApp;
import { createStore } from "redux"
import todoApp from "./reducers"
import {
	addTodo,
	toggleTodo,
	setVisibilityFilter,
	VisibilityFilters
} from "./actions.js";


const store = createStore(todoApp);

console.log(store.getState());
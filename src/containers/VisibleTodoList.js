import { connect } from 'react-redux'
import { toggleTodo, VisibilityFilters } from '../state/actions'
import TodoList from '../components/TodoList'
const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;

const getVisibleTodos = function(todos, filter) {
	switch(filter) {
		case SHOW_ALL:
			return todos;
		case SHOW_COMPLETED:
			return todos.filter((t)=> t.completed);
		case SHOW_ACTIVE:
			return todos.filter((t)=>!t.completed);
	}
	return todos;
};

const mapStateToProps = state => {
	return { 
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onTodoClick : (idx) => {
			console.log(idx);
			dispatch(toggleTodo(idx));
		}
	}
};

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
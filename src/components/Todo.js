import React from 'react'
import PropTypes from 'prop-types'


const Todo = ({onClick, completed, text}) => (
	<li 
		onClick={onClick}
		style={{ color: completed ? "green" : "black", cursor: "pointer" }}
	>
	{text}
	</li>
);

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
};

export default Todo;
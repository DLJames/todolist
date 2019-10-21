import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {

	const [message, setMessage] = useState('');

	const handleClick = () => {
		const { handleItemDel, index } = props;
		handleItemDel(index);
		// setMessage('James')
	}

	const {todo, test} = props;

	return (
		<li
			className="todo-item"
			// dangerouslySetInnerHTML={{__html: props.todo}}
		>
			<label htmlFor="id">{todo}</label>
			<input type="radio" name="todolistitem" id={todo} />
			<span> {test} - {todo}</span>
			<span className="delBtn" onClick={handleClick}>Del</span>
		</li>
	);
}

TodoItem.propTypes = {
	test: PropTypes.string.isRequired,
	handleItemDel: PropTypes.func,
	index: PropTypes.number,
	todo: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number])
}

TodoItem.defaultProps = {
	test: 'Hello'
}

export default TodoItem;
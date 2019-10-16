import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {

		const handleClick = () => {
			const { handleItemDel, index } = props;
			handleItemDel(index);
		}

		const {todo, test} = props;

    return (
			<li
				onClick={handleClick} 
				className="todo-item"
				// dangerouslySetInnerHTML={{__html: props.todo}}
			>{test} - {todo}</li>
    );
}

TodoItem.propTypes = {
	test: PropTypes.string.isRequired,
	handleItemDel: PropTypes.func,
	index: PropTypes.number,
	todo: PropTypes.arrayOf(PropTypes.string, PropTypes.bool, PropTypes.number)
}

TodoItem.defaultProps = {
	test: 'Hello'
}

export default TodoItem;
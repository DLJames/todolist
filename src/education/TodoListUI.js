
import React from 'react';

const TodoListUI = (props) => {
  const { inputVal, list, handleChange, addTodo } = props;
  return (
    <div>
      <div>
        <input value={inputVal} onChange={handleChange} />
        <button onClick={addTodo}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  );
}

export default TodoListUI;